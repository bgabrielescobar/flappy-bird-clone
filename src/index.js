import FlappyBird from "./FlappyBird";
import Pipe from "./Pipe";
import Colors from "./Colors";
import { update, keyDown } from "./Gameplay";

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let spriteFlappy = new Image();
spriteFlappy.src = "../sprites/FlappySprite.png";

// ############# Initialize object ##############

let score = 0;
let color;
let canGetPoint = true;
let contextIndex = this;
let flappy = new FlappyBird();
let pipes = Array(2);

//pipe top = 0 - pipe bot = 1
pipes[0] = new Pipe(window.innerWidth, 0);
pipes[1] = new Pipe(window.innerWidth, 600);

let gameContext = {
  contextIndex,
  score,
  color,
  canGetPoint,
  flappy,
  pipes,
  ctx,
  Colors
};
window.addEventListener("keydown", e => keyDown(gameContext), false);
// ############# Game logic ##############
//setInterval(() => update(gameContext), 10);
//setInterval(update, 10);
//TODO: Game over cuando caiga y reiniciar pipes -
//TODO: Pipes random generator
