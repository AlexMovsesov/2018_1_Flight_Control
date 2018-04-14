'use strict';
/**
 Aleksandr Movesosov @Copyright 03.2018
 */

(function () {
    const noop = () => null;

    /**
     * Class create airplane wrap
     */
    class AirplaneModel {
        /**
         *
         * @param tile is a tile of the map
         * @param direction is an array of tiles
         */
        constructor(tile, direction) {
            this.moveable = true;
            this.tile = tile;
            this.direction = direction;
            this.img = null;
            this.is_lined = false;
        }

        get getNextTile() {
            if(this.direction.length > 0 && this.moveable) {
                return this.direction.shift();
            } else {
                return null;
            }
        }

        get getTiles() {
            if(this.moveable) {
                return this.direction;
            }
        }

        moveTo(tile) {
            if(!this.moveable) {
                return false;
            }
            if(this.direction.length > 0) {
                if(this.direction[0] == tile) {
                    this.tile = tile;
                }
            }
            const isLanding = this.tile instanceof TileManager
                && this.tile.getLanding() instanceof LandingModel
                && this.moveable;
            if(isLanding) {
                this.moveable = false;
                this.tile.getLanding().incrementCount();
            }
            return true;
        }

    }
    window.AirplaneModel = AirplaneModel;
})();