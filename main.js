//Square Move and Colour Change
console.log("hi");

//SETUP
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

//MouseKeyboard
let x = 50;
let animate = false;
let rectBlue = 225;
let rectRed = 0;
let rectSize = 80;

requestAnimationFrame(draw);
function draw() {
  //UPDATE ELEMENTS

  if (animate) {
    x++;
    rectSize += Math.random() * 2 - 1;
    rectBlue -= 0.5;
    rectRed += 0.5;
  }
  if (x > 600) {
    x = 0;
  }

  //DRAW
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "rgb(" + rectRed + ", 0," + rectBlue + ")";
  ctx.fillRect(x, 100, rectSize, rectSize);

  //REQUEST ANIMATION FRAME
  requestAnimationFrame(draw);
}

//Event Listeners & Handlers
document.addEventListener("keydown", keydownHandler);

function keydownHandler() {
  if (animate) {
    animate = false;
  } else {
    animate = true;
  }
}