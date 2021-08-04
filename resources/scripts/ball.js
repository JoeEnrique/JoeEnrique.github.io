import { detectCollision } from "./collisionDetection.js";

export default class Ball {
  constructor(game) {
    this.image = document.getElementById("image_ball");
    //this.object = document.querySelector("image_ball");
    //this.imageSize = this.object.clientWidth;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    this.reset();
  }

  reset() {
    this.position = { x: 400, y: 200 };
    this.speed = { x: 6, y: 6 };
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y);
  }

  update(deltaTime) {
    //console.log(this.game.paddle.position.x);
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //Wall
    if (this.position.x > this.gameWidth - 35 || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    if (this.position.y > this.gameHeight - 35) {
      //this.speed.y = -this.speed.y;
      this.game.lives--;
      this.reset();
    }

    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - 35;
    }
  }
}
