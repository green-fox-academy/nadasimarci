'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = '.eslaf eb ton dluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
let reverseString = '';
for (var i = reversed.length - 1; i >= 0; i--) {
    reverseString += reversed[i];
}
console.log(reverseString);