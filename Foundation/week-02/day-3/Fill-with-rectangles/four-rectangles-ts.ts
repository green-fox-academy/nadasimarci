'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

function fourRectangles(x: any, y: any, a: any, b: any) {
    ctx.beginPath();
    ctx.fillRect(x, y, a, b);
    ctx.stroke();
}
let colors = ["red", "blue", "green", "yellow"]



for (let i = 1; i < 5; i++) {
    ctx.fillStyle = colors[i - 1];
    fourRectangles(i * 100, i * 100, i * 25, i * 25)
}

