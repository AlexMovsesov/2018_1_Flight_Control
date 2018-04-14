'use strict';
/**
 Aleksandr Movesosov @Copyright 03.2018
 */

(function () {
    const noop = () => null;

    /**
     * Class create airplane wrap
     */
    class LandingModel {
        constructor(tile) {
            this.tile = tile;
            this.count = 0;
        }

        get getTile() {
            return this.tile;
        }

        get getCount() {
            return this.count;
        }

        incrementCount() {
            this.count++;
        }
    }
    window.LandingModel = LandingModel;
})();