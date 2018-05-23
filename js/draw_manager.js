'use strict';
/**
 Aleksandr Movesosov @Copyright 03.2018
 */

(function () {
    const noop = () => null;

    /**
     * Class create airplane wrap
     */
    class DrawManager {
        constructor(context, width, height) {
            this.context = context;
            this.width = width;
            this.height = height;
        }
        drawBlock(landing) {
            const width = this.width;
            const height = this.height;
            const imgL = landing.img;
            const leftOffset = imgL.style.left;
            const heightOffset = imgL.style.top;
            const img = new Image();
            Object.assign(img.style, {
                position: 'absolute',
                left: leftOffset,
                top: heightOffset,
            });
            img.draggable=false;
            img.height = height*2;
            img.onload = function() {
                img.ratio = this.width/this.height;
            };
            img.src = "img/ambar.svg";
            img.className='ambar';
            document.body.appendChild(img);
        }
        drawVertical(landing) {
            const img = new Image();
            const width = this.width;
            const height = this.height;
            landing.img = img;
            img.style = landing.tile.style;
            Object.assign(img.style, {
                top: parseInt(img.style.top) - height + 'px',
                left: parseInt(img.style.left) -width/4+ 'px',
            });
            img.width = width * 2;
            img.height = height *2;
            img.draggable = false;
            img.onload = function() {
                img.ratio = this.width/this.height;
            };
            img.src = "img/vertical_land.svg";
            img.setAttribute("class", "landing");
            img.landing = landing;
            document.body.appendChild(img);
        }
        drawHorizontal(landing) {
            const img = new Image();
            const context = this.context;
            const width = this.width;
            const height = this.height;
            landing.img = img;
            img.style = landing.tile.style;
            console.log(img.style);
            img.height = height;
            img.draggable = false;
            img.onload = function() {
                const ambar = document.getElementsByClassName('ambar')[0];
                ambar.style.left = parseInt(ambar.style.left) + img.width - 1 + 'px';
            };
            img.src = "img/horizontal_land.svg";
            img.setAttribute("class", "landing");
            img.landing = landing;
            document.body.appendChild(img);
        }
        drawLanding(landings) {

            let tile = landings.horizontal;
            let landing = tile.landing;
            this.drawHorizontal(landing);
            this.drawBlock(landing);
            tile = landings.vertical;
            landing = tile.landing;
            this.drawVertical(landing);

        }
        drawAirplane(airplane) {
            const img = new Image();
            const context = this.context;
            const width = this.width;
            const height = this.height;
            airplane.img = img;
            img.style = airplane.tile.style;
            img.width = width;
            img.height = height;
            img.draggable = false;
            img.src = "img/airplane.svg";
            img.setAttribute("class", "airplane");
            document.body.appendChild(img);
            img.airplane = airplane;

        }
        normalizeArg(arg) {
            arg = -1 * (arg + 270) % 360;
            return arg;
        }
        getDiffs(tile1, tile2) {
            let diffX = tile2.x - tile1.horizontal;
            let diffY = tile2.y - tile1.vertical;
            return {x: diffX, y: diffY};
        }
        redrawImage(img, prevTile, tile, airplane, arg, prevArg = 10) {
            arg = Math.round(this.normalizeArg(arg));
            prevArg = Math.round(this.normalizeArg(prevArg));
            arg = arg - prevArg >= 180? arg - 360 : arg;
            arg = arg - prevArg <= -180? arg + 360 : arg;
            console.log(arg);

                const diff = {x:prevTile.horizontal,y:prevTile.vertical};
                const curDiff = {x:tile.horizontal,y:tile.vertical};
                const airplaneModel = {horizontal: airplane.xDiff, vertical: airplane.yDiff};
                const prevDiff = this.getDiffs(airplaneModel,diff);
                const currentDiff = this.getDiffs(airplaneModel,curDiff);

                img.animate([
                    // keyframes
                    { transform: `translate(${prevDiff.x}px,${prevDiff.y}px) rotate(${prevArg}deg)` },
                    { transform: `translate(${currentDiff.x}px,${currentDiff.y}px) rotate(${arg}deg)` },
                ],{duration: 250, fill: "both", easing: "linear"});
            // img.style.left = tile.horizontal+'px';
            // img.style.top = tile.vertical+'px';
            }

    }
    window.DrawManager = DrawManager;
})();