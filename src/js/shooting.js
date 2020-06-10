"use strict"

const ENEMIES = 10;
const FPS = 30;
const MSPF = 1000 / FPS;
const KEYS = new Array(256);

for (let i = 0; i < KEYS.length; i++) {
  KEYS[i] = false;
}

let canvas;
let ctx;
let img_player;
let img_enemy;
let player_x;
let player_y;
let enemies_x = new Array(ENEMIES);
let enemies_y = new Array(ENEMIES);

let movePlayer = function() {
  const SPEED = 2;
  const RIGHT = 39;
  const LEFT = 37;

  if (KEYS[RIGHT]) {
    player_x += SPEED;
  }

  if (KEYS[LEFT]) {
    player_x -= SPEED;
  }
};

let mainloop = function() {
  let startTime = new Date();

  movePlayer();

  redraw();

  let deltaTime = (new Date()) - startTime;
  let interval = MSPF - deltaTime;

  if (interval > 0) {
    setTimeout(mainloop, interval);
  } else {
    mainloop();
  }
};

let redraw = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(img_player, player_x, player_y);

  for (let i = 0; i < ENEMIES; i++) {
    ctx.drawImage(img_enemy, enemies_x[i], enemies_y[i]);
  }
};

window.onkeydown = function(e) {
  KEYS[e.keyCode] = true;
};

window.onkeyup = function(e) {
  KEYS[e.keyCode] = false;
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

  mainloop();


};