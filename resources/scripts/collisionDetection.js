export function detectCollision(ball, gameObject) {
  let bottomOfBall = ball.position.y + 35;
  let topOfBall = ball.position.y;

  let top_ofObject = gameObject.position.y;
  let left_ofObject = gameObject.position.x;
  let right_ofObject = gameObject.position.x + gameObject.width;
  let bottom_ofObject = gameObject.position.y + gameObject.height;

  //Collition Check;
  if (
    bottomOfBall >= top_ofObject &&
    topOfBall <= bottom_ofObject &&
    ball.position.x >= left_ofObject &&
    ball.position.x + 35 <= right_ofObject
  ) {
    /*
      this.speed.y = -this.speed.y;
      this.position.y = gameObject.position.y - 35;
      */
    return true;
  } else {
    return false;
  }
}
