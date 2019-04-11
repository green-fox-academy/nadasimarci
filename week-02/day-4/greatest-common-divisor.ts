// Find the greatest common divisor of two numbers using recursion.

'use strict';


function greatestCommonDivisor(a: number, b: number): number {

    if (b == 0) {
        return a;
    }
    else {
        return greatestCommonDivisor(b, a % b)
    }
}

console.log(greatestCommonDivisor(25, 95));
