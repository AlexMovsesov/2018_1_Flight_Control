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
            this.arg = 0;
            this.xDiff = this.tile.horizontal;
            this.yDiff = this.tile.vertical;
        }

        getNextTile() {
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

        moveTo(tile, drawer) {
            const RadToDef = 180/Math.PI;
            if(!this.moveable) {
                return false;
            }
            const prev = {x: this.tile.center.x, y: this.tile.center.y,};
            const current = {
                x: tile.center.x,
                y: tile.center.y,
            };
            // console.log(Math.sqrt((current.x - prev.x) ** 2 + (current.y - prev.y) ** 2));
            // console.log(Math.atan2(current.y,current.x) - Math.atan2(prev.y,prev.x) * 180 / Math.PI);
            let tan = ( Math.atan2(prev.y - current.y, current.x - prev.x) );
            tan = (tan >= 0 ? tan : tan + 2*Math.PI);
            tan *= RadToDef;
            console.log(tan);
            // this.arg = Math.atan2(prev - centerY, prevCenterX - centerX)*(180/3.14) > 0 ? this.arg + arg : this.arg - arg;
            // console.log(this.arg);
            const prevTile = this.tile;
            if(this.direction.length > 0) {
                if(this.direction[0] != tile) {
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
            drawer.redrawImage(this.img, prevTile, tile, this, tan, this.arg);
            this.arg = tan;
            return true;
        }
        
        makeDirection(line, tiles) {
            const direction = [];
            for(let i =0; i< line.length; i++) {
                let point = line[i];
                tiles.sort(function (firstTile, secondTile) {
                    const firstDistance = firstTile.getDistance(point);
                    const secondDistance = secondTile.getDistance(point);
                    if(firstDistance > secondDistance){
                        return 1;
                    }
                    else {
                        return firstDistance == secondDistance ? 0 : -1;
                    }
                });
                let inCond = false;
                direction.forEach(function(point){
                    if(point == tiles[0]) {
                        inCond = true;
                    }
                });
                if(!inCond) {
                    direction.push(tiles[0]);
                }
            }
            this.direction = direction;
            return direction;
        }

    }
    window.AirplaneModel = AirplaneModel;
})();