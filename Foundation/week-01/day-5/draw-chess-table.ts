'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//


for (let i: number = 0; i < 8; i++) {

  if (i % 2 == 0) {
    console.log('% % % %')
  }
  
  else {
    console.log(' % % % %')
  }
}

