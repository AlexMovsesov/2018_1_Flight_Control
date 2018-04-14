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
            img.onload = function() {
                context.drawImage(this,landing.tile.horizontal, landing.tile.vertical, width, height);
            };
            img.src = "img/road.svg";
            img.setAttribute("class", "landing");
            img.landing = landing;
        }
        drawAirplane(airplane) {
            const img = new Image();
            const context = this.context;
            const width = this.width;
            const height = this.height;
            airplane.img = img;

            img.onload = function() {
                context.drawImage(this,airplane.tile.horizontal, airplane.tile.vertical, width, height);
            };
            img.src = "img/airplane.svg";
            img.setAttribute("class", "airplane");
            img.airplane = airplane;

        }
    }
    window.DrawManager = DrawManager;
})();