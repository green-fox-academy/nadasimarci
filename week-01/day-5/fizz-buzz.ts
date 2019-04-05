'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

for (let oneToHundred: number = 1; oneToHundred <= 100; oneToHundred++) {
    if (oneToHundred%3 == 1 && oneToHundred%5 == 1 ) {
        console.log("FizzBuzz")
    }

    else if (oneToHundred%3 == 1) {
        console.log("Fizz")
    }

    else if (oneToHundred%5 == 1) {
        console.log("Buzz") 
    }

    else {
        console.log(oneToHundred) 
    }

  }
