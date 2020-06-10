"use strict"

const ENEMIES = 10;

let canvas;
let ctx;
let img_player;
let img_enemy;
let player_x;
let player_y;
let enemies_x = new Array(ENEMIES);
let enemies_y = new Array(ENEMIES);

let redraw = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(img_player, player_x, player_y);

  for (let i = 0; i < ENEMIES; i++) {
    ctx.drawImage(img_enemy, enemies_x[i], enemies_y[i]);
  }
}


window.onkeydown = function(e) {
  const SPEED = 2;
  const RIGHT = 39;
  const LEFT = 37;
  let moved = false;
  if (e.keyCode == RIGHT) {
    player_x += SPEED;
    moved = true;
  } else if (e.keyCode == LEFT) {
    player_x -= SPEED;
    moved = true;
  }

  if (moved) {
    redraw();
  }
};

window.onload = function() {
  canvas = document.getElementById('screen');
  ctx = canvas.getContext('2d');

  img_player = document.getElementById('player');
  img_enemy = document.getElementById('enemy');

  player_x = (canvas.width - player.width) / 2;
  player_y = (canvas.height - player.height) - 20;

  for (let i = 0; i < ENEMIES; i++) {
    enemies_x[i] = Math.random() * (canvas.width - img_enemy.width);
    enemies_y[i] = Math.random() * (canvas.height - img_enemy.height);
  }

  redraw();


};