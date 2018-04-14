'use strict';
/**
 Aleksandr Movesosov @Copyright 03.2018
 */

(function () {
    const noop = () => null;

    /**
     * Class create airplane wrap
     */
    class LineManager {
        constructor(canvas, tiles) {
            this.canvas = canvas.canvas;
            this.tiles = tiles;
            this.line = [];
        }
        addEvents(airplane, land, width, height, drawer) {
            const canvas = this.canvas;
            const context = canvas.getContext('2d');
            let line = this.line;
            const redraw = function(is_draw) {

                context.clearRect(0, 0, canvas.width, canvas.height);
                drawer.drawLanding(land);
                drawer.drawAirplane(airplane);

                if(is_draw) {
                    context.strokeStyle = "#000";
                    context.lineJoin = "round";
                    context.lineWidth = 2;
                    context.beginPath();
                    for(let i =0; i < line.length - 1; i++) {
                        context.moveTo(line[i]['x'], line[i]['y']);
                        context.lineTo(line[i+1]['x'],line[i+1]['y']);
                        context.closePath();
                        context.stroke();
                    }
                }
                else {
                    airplane.is_lined = false;
                }
            };

            const freq = 2;
            let drawLineCnt = 0;
            const startDrawLine = (evt)=>{
                if(drawLineCnt > freq) {
                    line.push({
                        'x': evt.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
                        'y': evt.clientY + document.body.scrollTop + document.documentElement.scrollTop + 40
                    });
                    redraw(true);
                    drawLineCnt = 0;
                }
                drawLineCnt++;
            };

            const endOfLineHandler = (evt)=>{
                const rect = canvas.getBoundingClientRect();
                const clickX = evt.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - rect.left;
                const clickY = evt.clientY + document.body.scrollTop + document.documentElement.scrollTop - rect.top + 40;
                const landTile = land.tile;
                if (clickX < (landTile.horizontal + width) && clickX > landTile.horizontal
                    && clickY < landTile.vertical + height && clickY > landTile.vertical) {
                    (() =>{
                        canvas.removeEventListener('mousemove', startDrawLine);
                        canvas.removeEventListener('mousemove', endOfLineHandler);
                        line = [];
                    })();
                }
            };
            const lineDrawer = (evt)=>{
                const rect = canvas.getBoundingClientRect();
                const context = canvas.getContext('2d');
                const clickX = evt.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - rect.left;
                const clickY = evt.clientY + document.body.scrollTop + document.documentElement.scrollTop - rect.top + 40;
                const airplaneTile = airplane.tile;
                if (clickX <= (airplaneTile.horizontal + width) && clickX >= airplaneTile.horizontal
                    && clickY <= airplaneTile.vertical + height && clickY >= airplaneTile.vertical) {
                    (() =>{
                        if(airplane.is_lined) {
                            redraw(false);
                            line = [];
                        }
                        canvas.addEventListener('mousemove', startDrawLine);
                        canvas.addEventListener('mousemove', endOfLineHandler);
                        airplane.is_lined = true;
                    })();
                }
            };
            this.canvas.addEventListener('click', lineDrawer);

        }


    }
    window.LineManager = LineManager;
})();