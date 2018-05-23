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
            let moveAirplane = function() {
                let nextTile = airplane.getNextTile();
                let draw = setInterval(function () {
                    if (nextTile instanceof TileManager) {
                        airplane.moveTo(nextTile, drawer);
                    }
                    nextTile = airplane.getNextTile();
                    if(nextTile == null){
                        clearInterval(draw);
                    }
                }, 300);

            };
            const redraw = function(is_draw) {

                context.clearRect(0, 0, canvas.width, canvas.height);

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

            const startDrawLine = (evt)=>{
                line.push({
                    'x': evt.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
                    'y': evt.clientY + document.body.scrollTop + document.documentElement.scrollTop + 40
                });
                redraw(true);
            };

            const tiles = this.tiles;
            const endOfLineHandler = (evt)=>{
                startDrawLine({'clientX':land.tile.horizontal,'clientY':land.tile.vertical});
                canvas.removeEventListener('mousemove', startDrawLine);
                land.img.removeEventListener('mousemove', endOfLineHandler);
                line = airplane.makeDirection(line, tiles).map(function(tile){
                    return {
                       'x': tile.center.x,
                       'y': tile.center.y
                    };
                });

                redraw(true);
                moveAirplane();
                line = [];
            };
            const lineDrawer = (evt)=>{
                if(airplane.is_lined) {
                    redraw(false);
                    line = [];
                }
                canvas.addEventListener('mousemove', startDrawLine);
                land.img.addEventListener('mousemove', endOfLineHandler);
                airplane.is_lined = true;
            };
            airplane.img.addEventListener('click', lineDrawer);

        }


    }
    window.LineManager = LineManager;
})();