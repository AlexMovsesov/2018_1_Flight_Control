'use strict';
/**
 Aleksandr Movesosov @Copyright 03.2018
 */

const canvasManager = window.CanvasManager;
const tileManager = window.TileManager;
const lineManager = window.LineManager;
const drawManager = window.DrawManager;

const rows = 10;
const columns = 15;

(function() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const tileWidth = Math.floor(width / rows);
    const tileHeight = Math.floor(height / columns);
    const canvas = new canvasManager(document.getElementById('game'));
    canvas.setSize(width, height);
    canvas.mapGenerate(rows, columns, tileWidth, tileHeight);
    //random land near the center of map
    let lands = canvas.landGenerate(rows, columns);
    //random airplane on the borders
    let airplane = canvas.airplaneGenerate(rows, columns);
    let airplaneTwo = canvas.airplaneGenerate(rows, columns);
    const drawer = new drawManager(canvas.context, tileWidth, tileHeight);
    drawer.drawLanding(lands);
    drawer.drawAirplane(airplane);
    drawer.drawAirplane(airplaneTwo);
    const liner = new lineManager(canvas, canvas.getTiles);
    liner.addEvents(airplane, lands[0], tileWidth, tileHeight, drawer);
    liner.addEvents(airplaneTwo, lands[0], tileWidth, tileHeight, drawer);


})();
