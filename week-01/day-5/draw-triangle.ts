'use strict';

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let lineCount: number = 4;

for (let index = 1; index <= lineCount; index++) {
    let triangle: any = "";
    for (let i = 1; i <= index; i++){
        triangle += "*"

    }
    console.log(triangle)
    
}