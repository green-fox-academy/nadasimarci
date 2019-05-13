'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

ctx.fillStyle = "purple";
ctx.strokeStyle = "black";
let y:number = 10;
let pixcount:number = 0;
let pixcount2: number = 0;

for(let i:number = 1; i < 7; i++){
    ctx.fillRect(y+pixcount, y+pixcount, y*i, y*i);
    pixcount = pixcount +i*y
}
ctx.moveTo(0,0)
for(let i:number = 1; i < 7; i++){
    ctx.strokeRect(y+pixcount2, y+pixcount2, y*i, y*i);
    pixcount2 = pixcount2 +i*y
}
