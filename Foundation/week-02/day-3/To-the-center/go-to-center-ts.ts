'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
function drawToCenter(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 300);
    ctx.strokeStyle = "black";
    ctx.stroke()
}

// Draw 3 lines with that function. Use loop for that.
for (let i = 1; i < 4; i++) {
    drawToCenter(i * 50, i * 150);
}

