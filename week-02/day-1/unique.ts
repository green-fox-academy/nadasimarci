'use strict';

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

//  Example
// console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`

let myArray: number[] = [1, 11, 34, 11, 52, 61, 1, 34];

function unique(arr: number[]): number[] {
    return arr.filter((element, i) => arr.indexOf(element) === i);
}

console.log(unique(myArray));