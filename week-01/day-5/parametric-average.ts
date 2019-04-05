'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let input: number = 5;
let Sum: number = 0;
for (var givenNumber = 1; givenNumber <= input; givenNumber++) {
    Sum += givenNumber
    
}
console.log("Sum: " + Sum, ", Average: " + (Sum/input));