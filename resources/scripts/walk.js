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


const bouncearea = {
    element: document.getElementById("bouncearea"),
    width: 800,
    height: 600,
  };
  
  function initialize() {
    bouncearea.element.style.width = bouncearea.width + "px";
    bouncearea.element.style.height = bouncearea.height + "px";
    document.body.appendChild(bouncearea.element);
  }
  
  function moveTo(ball, x, y) {
    ball.element.style.left = x + "px";
    ball.element.style.top = y + "px";
  }
  
  function changeDirectionIfNecessary(ball, x, y) {
      if (x < 0 || x > bouncearea.width - ball.width) {
          ball.dx = -ball.dx;
        }
        if (y < 0 || y > bouncearea.height - ball.height) {
          ball.dy = -ball.dy;
        }
    
  }
  
  function create(color, dx, dy) {
    const newBall = {
      element: document.createElement("div"),
      width: 30,
      height: 30,
      dx: 8,
      dy: 8,
    };
  
    newBall.element.style.left = dx + "px";
    newBall.element.style.top = dy + "px";
    newBall.element.style.width = newBall.width + "px";
    newBall.element.style.height = newBall.height + "px";
    newBall.element.style.backgroundColor = color;
    newBall.element.className += "createdball";
    document.getElementById("bouncearea").appendChild(newBall.element);
  
    return newBall;
  }
  
  function update(ball, x, y) {
    x = x + ball.dx;
    y = y + ball.dy;
    changeDirectionIfNecessary(ball, x, y);
    moveTo(ball, x, y);
    setTimeout(update, 16, ball, x, y);
  }
  
  initialize();
  
  const ball1 = create("blue", 4, 3);
  const ball2 = create("red", 1, 5);
  const ball3 = create("green", 2, 2);
  
  update(ball1, 70, 0);
  update(ball2, 20, 200);
  update(ball3, 300, 330);
  

  //Next Color List
function next_Color() {
    color_list_index++;
    if (color_list_index > color_list.length) {
      color_list_index = 0;
    }
    document.getElementById("bouncearea").style.backgroundColor = color_list[color_list_index];
    var getNextColor = color_list_index + 1;
    if(getNextColor >= color_list.length){
        getNextColor = 0;
        if(getNextColor == 0 && color_list_index == 0){
            getNextColor++;
        }
    }
    ball1.element.style.backgroundColor = color_list[getNextColor];
    ball2.element.style.backgroundColor = color_list[getNextColor];
    ball3.element.style.backgroundColor = color_list[getNextColor];
  }

  //Set Interval for Colors
function swap_Color() {
    setInterval(next_Color, 5000);
  }

  
  setTimeout(swap_Color, 3500);


  if (typeof module !== "undefined") {
    module.exports = { update, create, changeDirectionIfNecessary, moveTo, bouncearea };
  }
  