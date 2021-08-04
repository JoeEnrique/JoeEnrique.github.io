import Game from "./cardgame_engine.js";

/*
img.onload = function() {
  init();
};
*/
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const cardsheet = new Image();
cardsheet.src = "./resources/images/carddeck.png";
var cards;
//console.log("Cards: " + cards);

var x = 0;
var y = 0;

var srcX;
var srcY;

var sheetWidth = 2178;
var sheetHeight = 1216;
var columns = 13;
var rows = 5;
var spriteWidth = sheetWidth / columns;
var spriteHeight = sheetHeight / rows;
var currentFrame = 0;

function loadCards(image) {
  cards = ctx.drawImage(
    image,
    srcX,
    srcY,
    sheetWidth,
    sheetHeight,
    x,
    y,
    spriteWidth,
    spriteHeight
  );
}

loadCards(cardsheet);

const GAME_WIDTH = 1000;
const GAME_HEIGHT = 700;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
let lastTime = 0;

function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
