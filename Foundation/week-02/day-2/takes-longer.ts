'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let missingPart: string = " always takes longer than";
quote = [quote.slice(0, 20) + missingPart + quote.slice(20)].join();
console.log(quote);