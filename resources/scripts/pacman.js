var pos = 0;
const pacArray = [
  ["./resources/images/PacMan1.png", "./resources/images/PacMan2.png"],
  ["./resources/images/PacMan3.png", "./resources/images/PacMan4.png"],
];

var direction = 0;
var focus = 0;
var pacmanPosition; //Track the location of PacMan

function Run() {
  let img = document.getElementById("PacMan");
  let imgWidth = img.offsetWidth;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + "px";
  } else {
    pos += 20;
    img.style.left = pos + "px";
  }

  pacmanPosition = pos;
  //console.log("Position: " + pacmanPosition);
}
setInterval(Run, 200);

function checkPageBounds(direction, imgWidth, pos) {
  //let pageWidth = window.innerWidth; //Check page limits
  let pageWidth = document.getElementById("panel").offsetWidth;
  if (pos + imgWidth > pageWidth) {
    direction = 1;
  }
  if (pos < 0) {
    direction = 0;
  }
  return direction;
}

//Ghost Code

var ghost_X = -300;
var advance = 10;
var ghost = document.getElementById("ghost");

function init() {
  ghost_X = 0;
  moveGhost();
}

function moveGhost() {
  ghost_X = ghost_X + advance;
  check_Ghost_Direction();
  ghost.style.left = ghost_X + "px";
  setTimeout(moveGhost, 16);
}

function check_Ghost_Direction() {
  let pageWidth = document.getElementById("panel").offsetWidth;
  if (ghost_X < 0 || ghost_X > pageWidth - 202) {
    advance = -advance;
  }
  check_Style_Direction(advance);
}

function check_Style_Direction(advance) {
  if (advance > 0) {
    let leftEye = document.getElementById("left-eye");
    leftEye.style.top = 50 + "px";
    leftEye.style.left = 50 + "px";

    let rightEye = document.getElementById("right-eye");
    rightEye.style.top = 50 + "px";
    rightEye.style.left = 120 + "px";

    let leftPupil = document.getElementById("left-pupil");
    leftPupil.style.top = 80 + "px";
    leftPupil.style.left = 80 + "px";

    let rightPupil = document.getElementById("right-pupil");
    rightPupil.style.top = 80 + "px";
    rightPupil.style.left = 150 + "px";
  } else {
    let leftEye = document.getElementById("left-eye");
    leftEye.style.top = 50 + "px";
    leftEye.style.left = 20 + "px";

    let rightEye = document.getElementById("right-eye");
    rightEye.style.top = 50 + "px";
    rightEye.style.left = 90 + "px";

    let leftPupil = document.getElementById("left-pupil");
    leftPupil.style.top = 80 + "px";
    leftPupil.style.left = 30 + "px";

    let rightPupil = document.getElementById("right-pupil");
    rightPupil.style.top = 80 + "px";
    rightPupil.style.left = 100 + "px";
  }

  let PacMan = document.getElementById("PacMan");
  let pacmanWidth = PacMan.offsetWidth;
  //console.log(pacmanWidth)

  //pacmanPosition
  //pacmanWidth

  //ghost_X (Position)
  //202 width

  if (ghost_X > pacmanPosition && ghost_X < pacmanPosition + pacmanWidth) {
    //console.log("Miro...!")
    let leftEye = document.getElementById("left-eye");
    leftEye.style.top = 40 + "px";
    leftEye.style.left = 30 + "px";

    let rightEye = document.getElementById("right-eye");
    rightEye.style.top = 40 + "px";
    rightEye.style.left = 110 + "px";

    let leftPupil = document.getElementById("left-pupil");
    leftPupil.style.top = 46 + "px";
    leftPupil.style.left = 50 + "px";

    let rightPupil = document.getElementById("right-pupil");
    rightPupil.style.top = 46 + "px";
    rightPupil.style.left = 130 + "px";
  }
}

setTimeout(init, 5000);
