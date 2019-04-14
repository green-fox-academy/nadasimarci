'use strict';

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`

function unique(arr: number[]) {
  let uniqueArray: number[] = arr;
  let index: number = 0;
  let uniqueInd: number = 0;
  //increment arr[]
  for (index; index < arr.length; index++) {
      //increment uniarr[]
      for (uniqueInd; uniqueInd < arr.length; ++uniqueInd) {
          if (uniqueArray[uniqueInd] === arr[index]) {
              uniqueArray.splice(uniqueInd,1);
          }
      }       
  }
  //now it would return uniques only, but in as-is order
  return uniqueArray.sort(function(a,b){return a-b});
}
