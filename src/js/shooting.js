"use strict"

let canvas;
let ctx;
let img_player;
let img_enemy;

window.onload = function() {
  canvas = document.getElementById('screen');
  ctx = canvas.getContext('2d');

  img_player = document.getElementById('player');
  img_enemy = document.getElementById('enemy');

  ctx.drawImage(img_player, 20, 50);
  ctx.drawImage(img_enemy,
                Math.random() * (canvas.width - img_enemy.width),
                Math.random() * (canvas.height - img_enemy.height));


};