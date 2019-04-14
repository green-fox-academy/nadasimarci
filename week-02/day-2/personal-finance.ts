'use strict';

/* Create a list with the following items.
500, 1000, 1250, 175, 800 and 120 */

// Create an application which solves the following problems.

// How much did we spend?
let expens: number[] = [500, 1000, 1250, 175, 800, 120]

// What was the average amount of our spendings?
let sum: number = 0
for (let i: number = 0; i < expens.length; i++) { sum = sum + expens[i] }
console.log("We spent: " + sum)
console.log("Our average spending: " + sum / expens.length)


// Which was our greatest expense?
let great = Math.max.apply(null, expens);
console.log(great)


// Which was our cheapest spending?
let cheap = Math.min.apply(null, expens);
console.log(cheap)

export { }

