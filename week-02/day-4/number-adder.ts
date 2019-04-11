'use strict';

// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function recursiveFunction (n :number) :number{

    if (n < 0){
      return 0;
    }
      return n + recursiveFunction(n -1);
  }
  
  console.log(recursiveFunction(5));
  