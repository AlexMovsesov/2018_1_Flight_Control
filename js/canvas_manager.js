'use strict';
/**
 Aleksandr Movesosov @Copyright 03.2018
 */

(function () {
    const noop = () => null;

    /**
     * Class create airplane wrap
     */
    class CanvasManager {
        constructor(canvas) {
            this.canvas = canvas;
            this.context = canvas.getContext('2d');
            this.tilesArr = [];
            this.borders = [];
        }

        setSize(width, height) {
            this.canvas.width = width;
            this.canvas.height = height;
        }

        mapGenerate(rows, columns, tileWidth, tileHeight) {
            for(let i = 0; i < rows; i++) {
                for(let j= 0; j < columns; j++) {
                    let index = i * columns + j;
                    this.tilesArr[index] = new tileManager(i * tileWidth, j * tileHeight, tileWidth, tileHeight);
                }
            }
            let borders = [];
            for(let j = 0; j < columns; j++){
                borders.push(j);
                borders.push((rows-1)*columns + j);
            }
            for(let i = 1; i < rows; i++) {
                borders.push(i * columns);
                borders.push(i * columns + (columns-1));
            }
            this.borders = borders;
        };

        generateRandomNumber(size) {
            const min = Math.floor(size / 4);
            const max = size - min;
            return Math.round(Math.random() * (max - min +1) + min);
        }

        initDirection(column, row) {
            let forward = true;
            if(row >= Math.floor((rows - 1) / 2)){
                forward = false;
            }
            let directionArr = [];
            if(forward) {
                for(let i = 0; i < rows; i++) {
                    directionArr.push(this.tilesArr[i * columns + column]);
                }
            }
            else {
                for(let i = rows - 1; i >= 0; i--) {
                    directionArr.push(this.tilesArr[i * columns + column]);
                }
            }
            return directionArr;
        }

        landGenerate(rows, columns) {
            const size = this.tilesArr.length - 1;
            const pointHorizontal = Math.floor(size / 3);
            const pointVertical = pointHorizontal + columns + 3;
            console.log(pointHorizontal);
            console.log(pointVertical);
            const tiles = {};
            tiles.horizontal = this.tilesArr[pointHorizontal];
            tiles.vertical = this.tilesArr[pointVertical];
            for(let tile in tiles){
                if(tiles[tile] instanceof TileManager) {
                    tiles[tile].setLanding(new LandingModel(tiles[tile]));
                }
            }
            return tiles;
        }
        airplaneGenerate(rows, columns) {
            const size = this.borders.length - 1;
            const point = this.borders[this.generateRandomNumber(size)];
            const column = point % 10;
            const row = Math.floor(point / 10);
            const tile = this.tilesArr[point];
            tile.setAirplane(new AirplaneModel(tile, this.initDirection(column, row)));
            return tile.airplane;
        }

        get getTiles() {
            return this.tilesArr;
        }
    }
    window.CanvasManager = CanvasManager;
})();