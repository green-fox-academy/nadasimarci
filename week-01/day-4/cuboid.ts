'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let sideA: number = 10;
let sideB: number = 10;
let sideC: number = 10;

console.log('Surface Area:', (2*((sideA*sideB) + (sideA*sideC) + (sideB*sideC))))
console.log("Volume:", (sideA*sideB*sideC))