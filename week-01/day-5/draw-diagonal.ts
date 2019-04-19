'use strict';

let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

for (let i: number = 1; i <= lineCount; i++) {
  let doboz: string = ''
  for (let j: number = 1; j <= lineCount; j++) {
    if (i === 1 || i === lineCount) {
      doboz = doboz + '%'
    }
    else {
      if (j === 1 || j === lineCount || j === i) { doboz = doboz + '%' }
      else { doboz = doboz + ' ' }
    }
  }
  console.log(doboz)
}

