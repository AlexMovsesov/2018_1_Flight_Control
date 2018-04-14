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
        drawLanding(landing) {
            const img = new Image();
            const context = this.context;
            const width = this.width;
            const height = this.height;
            landing.img = img;
            img.style = landing.tile.style;
            img.width = width;
            img.height = height;
            img.src = "img/road.svg";
            img.setAttribute("class", "landing");
            document.body.appendChild(img);
            img.landing = landing;
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
            img.src = "img/airplane.svg";
            img.setAttribute("class", "airplane");
            document.body.appendChild(img);
            img.airplane = airplane;

        }
        redrawImage(img, tile) {
            img.style = tile.style;
        }
    }
    window.DrawManager = DrawManager;
})();