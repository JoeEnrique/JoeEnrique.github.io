//import Game from "./game";

export default class InputHandler {
  constructor(paddle, game) {
    document.addEventListener("keydown", (event) => {
      //alert(event.keyCode);
      switch (event.keyCode) {
        case 37:
          //Left
          paddle.moveLeft();
          break;
        case 38:
          //Up
          break;
        case 39:
          //Right
          paddle.moveRight();
          break;
        case 40:
          //Down
          break;
        case 27:
          // 27 is code for the escape key
          game.togglePause();
          break;
        case 32:
          // 32 is code for the spacebar
          game.start();
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      //alert(event.keyCode);
      switch (event.keyCode) {
        case 37:
          //Left
          if (paddle.speed < 0) paddle.stop();
          break;
        case 38:
          //Up
          break;
        case 39:
          //Right
          if (paddle.speed > 0) paddle.stop();
          break;
        case 40:
          //Down
          break;
      }
    });
  }
}
