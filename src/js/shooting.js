"use strict"

let canvas;
let ctx;
let img_player;
let img_enemy;
let player_x;
let player_y;


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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img_player, player_x, player_y);
  }
};

window.onload = function() {
  canvas = document.getElementById('screen');
  ctx = canvas.getContext('2d');

  img_player = document.getElementById('player');
  img_enemy = document.getElementById('enemy');

  player_x = (canvas.width - player.width) / 2;
  player_y = (canvas.height - player.height) - 20;

  ctx.drawImage(img_player, player_x, player_y);
  for (let i = 0; i < 10; i++) {
    ctx.drawImage(img_enemy,
                  Math.random() * (canvas.width - img_enemy.width),
                  Math.random() * (canvas.height - img_enemy.height));
  }


};