'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.
ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(450, 150);
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(450, 150);
ctx.lineTo(450, 450);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(450, 450);
ctx.lineTo(150, 450);
ctx.strokeStyle = "blue";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 450);
ctx.lineTo(150, 150);
ctx.strokeStyle = "yellow";
ctx.stroke();

