// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears
// across all the bunnies recursively

// recursion;


'use strict';


function earCounter(bunnies :number) :number{

  if (bunnies < 1){
    return 0;
  }
    return 2 + earCounter(bunnies -1);
}

console.log(earCounter(100));
