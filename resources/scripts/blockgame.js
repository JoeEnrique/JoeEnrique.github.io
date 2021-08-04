import Game from "./blockgame_engine.js";

//console.log("FROM Index: " + Paddle);
/*
console.log("FROM Index: " + colorRed.colorRed);
console.log("FROM Index: " + colorRed.name);
console.log("");
console.log("JOE");
*/

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 846;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
//game.start();

/*
let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);
new InputHandler(paddle);
*/

//let imgBall = document.getElementById("image_ball");
let lastTime = 0;

function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  /*
  paddle.update(deltaTime);
  paddle.draw(ctx);
  ball.update(deltaTime);
  ball.draw(ctx);
  */
  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
