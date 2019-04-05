'use strict';

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 4;

for (let index = 0; index < lineCount; index++) {
    let pyramid: any = "";
    for (let i = 1; i < lineCount-index; i++){
        pyramid = pyramid + " ";
}
for (let s = 1; s <= (2*index+1); s++) {
    pyramid = pyramid + '*';
}

console.log(pyramid);
}