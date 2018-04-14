'use strict';
/**
 Aleksandr Movesosov @Copyright 03.2018
*/

(function () {
    const noop = () => null;

    /**
     * Class create tile wrap
     */
    class TileManager {
        constructor(left, top, width, height) {
            this.horizontal = left;
            this.vertical = top;
            this.center = {
                'x': this.horizontal + width / 2,
                'y':this.vertical + height / 2
            };
            this.airplane = null;
            this.landing = null;
        }

        get getLanding() {
            return this.landing;
        }

        get getAirplane() {
            return this.airplane;
        }

        setLanding(landing) {
            this.landing = landing;
        }

        setAirplane(airplane) {
            this.airplane = airplane;
        }

        get getCenter() {
            return this.center;
        }

        /**
         * returns Euclid distance
         * @param point
         * @returns {number}
         */
        getDistance(point) {
            let distance = Math.pow(this.center.x - point.x, 2);
            distance += Math.pow(this.center.y - point.y, 2);
            distance = Math.sqrt(distance);
            return distance;
        }

        /**
         * two vectors from oxes, we can get angle between tile for rotating airplane
         * @param tile
         */
        getAngle(tile) {
            // scalar multiply and get acos
            //Math.acos();
        }

    }
    window.TileManager = TileManager;
})();