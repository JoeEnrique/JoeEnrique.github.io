//Main variables
var mainContainer = document.querySelector(".ball_container"); //Pull all the information about the element (including sub elements)
var ball_0 = document.getElementById("ball0");
var ball_list = ["ball1", "ball2", "ball3", "ball4", "ball5", "ball6"];
var ball_list_index = 0;
var ball_0_leftFoward = true;
var ball_0_topFoward = true;
var leftFoward = true;
var topFoward = true;

//Color List
var color_list = [
  "purple",
  "blue",
  "orange",
  "gold",
  "yellow",
  "green",
  "pink",
  "red",
  "darkblue",
  "cyan",
  "chartreuse",
  "deeppink",
];
var color_list_index = 0;

//Size List
var size_list = [50, 60, 70, 80, 90, 100, 110, 120, 110, 100, 90, 80, 70, 60];
var size_list_index = 0;

//Shape List
var form_radius_list = [50, 40, 30, 20, 10, 0, 10, 20, 30, 40];
var form_radius_list_index = 0;

//Velocity List
var velocity_list = [4, 8, 12, 16, 20, 16, 12, 8, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
var velocity_list_index = 0;

//Move Ball 0
function move_Ball_1() {
  let mainContainer_Width = mainContainer.offsetWidth;
  let mainContainer_Height = mainContainer.offsetHeight;
  let ball_0_X = ball_0.offsetLeft;
  let ball_0_Y = ball_0.offsetTop;

  var ball1width = mainContainer_Width - (size_list[size_list_index] + 20);
  var ball1height = mainContainer_Height - (size_list[size_list_index] + 20);

  if (ball_0_leftFoward == true) {
    ball_0_X = ball_0_X + velocity_list[velocity_list_index];
  } else {
    ball_0_X = ball_0_X - velocity_list[velocity_list_index];
  }

  if (ball_0_topFoward == true) {
    ball_0_Y = ball_0_Y + velocity_list[velocity_list_index];
  } else {
    ball_0_Y = ball_0_Y - velocity_list[velocity_list_index];
  }

  if (ball_0_X >= ball1width) {
    ball_0_leftFoward = false;
  }

  if (ball_0_X <= 0) {
    ball_0_leftFoward = true;
  }

  if (ball_0_Y >= ball1height) {
    ball_0_topFoward = false;
  }

  if (ball_0_Y <= 0) {
    ball_0_topFoward = true;
  }

  ball_0.style.left = ball_0_X + "px";
  ball_0.style.top = ball_0_Y + "px";
  ball_0.style.width = size_list[size_list_index] + "px";
  ball_0.style.height = size_list[size_list_index] + "px";
  ball_0.style.borderRadius = form_radius_list[form_radius_list_index] + "%";
  ball_0.style.background = color_list[color_list_index];
}

//Move all balls
function move_Ball() {
  let selectedBall = document.getElementById(ball_list[ball_list_index]);
  let mainContainer_Width = mainContainer.offsetWidth;
  let mainContainer_Height = mainContainer.offsetHeight;
  let location_X = selectedBall.offsetLeft;
  let location_Y = selectedBall.offsetTop;

  var actualWidth = mainContainer_Width - (size_list[size_list_index] + 20);
  var actualHeight = mainContainer_Height - (size_list[size_list_index] + 20);

  if (leftFoward == true) {
    location_X = location_X + velocity_list[velocity_list_index];
  } else {
    location_X = location_X - velocity_list[velocity_list_index];
  }

  if (topFoward == true) {
    location_Y = location_Y + velocity_list[velocity_list_index];
  } else {
    location_Y = location_Y - velocity_list[velocity_list_index];
  }

  if (location_X >= actualWidth) {
    leftFoward = false;
  }

  if (location_X <= 0) {
    leftFoward = true;
  }

  if (location_Y >= actualHeight) {
    topFoward = false;
  }

  if (location_Y <= 0) {
    topFoward = true;
  }

  selectedBall.style.left = location_X + "px";
  selectedBall.style.top = location_Y + "px";
  selectedBall.style.width = size_list[size_list_index] + "px";
  selectedBall.style.height = size_list[size_list_index] + "px";
  selectedBall.style.borderRadius =
    form_radius_list[form_radius_list_index] + "%";
  selectedBall.style.background = color_list[color_list_index];
}

//Set Intervals for Ball 0
function run_ball_1() {
  id_movingBall("p0", 0);
  setInterval(move_Ball_1, 10);
}

//Set Intervals for Balls 1 to 6
function move_All_Balls() {
  let pID = "p" + (ball_list_index + 1);
  id_movingBall(pID, ball_list_index + 1);
  setInterval(next_Ball, 5000);
  setInterval(move_Ball, 1);
}

function clearBoard() {
  document.getElementById("p1").innerHTML = "Ball 1: Is not Moving.";
  document.getElementById("p2").innerHTML = "Ball 2: Is not Moving.";
  document.getElementById("p3").innerHTML = "Ball 3: Is not Moving.";
  document.getElementById("p4").innerHTML = "Ball 4: Is not Moving.";
  document.getElementById("p5").innerHTML = "Ball 5: Is not Moving.";
  document.getElementById("p6").innerHTML = "Ball 6: Is not Moving.";
}

function id_movingBall(pid, index) {
  clearBoard();
  document.getElementById(pid).innerHTML = "Ball " + index + ": Is Moving!!!";
}

//Next Ball List
function next_Ball() {
  ball_list_index++;
  if (ball_list_index > 5) {
    ball_list_index = 0;
  }
  let pID = "p" + (ball_list_index + 1);
  id_movingBall(pID, ball_list_index + 1);
}

//Next Color List
function next_Color() {
  color_list_index++;
  if (color_list_index > color_list.length) {
    color_list_index = 0;
  }
}

//Next Size List
function next_Size() {
  size_list_index++;
  if (size_list_index > size_list.length) {
    size_list_index = 0;
  }
}

//Next Shape List
function next_Radius() {
  form_radius_list_index++;
  if (form_radius_list_index > form_radius_list.length) {
    form_radius_list_index = 0;
  }
}

//Next Speed List
function next_Speed() {
  velocity_list_index++;
  if (velocity_list_index > velocity_list.length) {
    velocity_list_index = 0;
  }
}

//Set Interval for Colors
function swap_Color() {
  setInterval(next_Color, 5000);
}

//Set Interval for Sizes
function swap_Size() {
  setInterval(next_Size, 500);
}

//Set Interval for Shapes
function swap_Shapes() {
  setInterval(next_Radius, 1000);
}

//Set Interval for Speeds
function swap_Speed() {
  setInterval(next_Speed, 1200);
}

//Moves Inits
setTimeout(run_ball_1, 3000);
setTimeout(move_All_Balls, 5000);

//Extrass Inits
setTimeout(swap_Color, 3500);
setTimeout(swap_Size, 6000);
setTimeout(swap_Shapes, 12000);
setTimeout(swap_Speed, 24000);
