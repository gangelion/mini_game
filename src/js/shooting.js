"use strict"

let canvas;
let ctx;

window.onload = function() {
  canvas = this.document.getElementById('screen');

  ctx = canvas.getContext('2d');

  ctx.fillStyle = '#fff';

  ctx.fillRect(8, 5, 20, 30);

  ctx.strokeStyle = '#f00';

  ctx.strokeRect(40, 55, 90, 10);
};