'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const heightOfTriangle = (0.5 * Math.pow(3, 0.5));

function triAngle(x, y, side) {

  if (side < 4) {
    return
  }
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + side, y);
  ctx.lineTo(x + side / 2, y + (heightOfTriangle * side));
  ctx.lineTo(x, y);
  ctx.strokeStyle = "silver";
  ctx.stroke();

  // Recursion
  triAngle(x, y, side / 2);
  triAngle(x + side / 2, y, side / 2);
  triAngle(x + side / 4, y + (heightOfTriangle * side) / 2, side / 2);
}
triAngle(10, 10, 580);
