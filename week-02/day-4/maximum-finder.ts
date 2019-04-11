// Write a function that finds the largest element of an array using recursion.

'use strict';

function findMax( A: number[], n: number): any {

    if (n == 1) {
        return A[0];
    }
    return Math.max(A[n - 1], findMax(A, n - 1));
}

var A = [1, 4, 45, 6, -50, 10, 2];
var n = A.length;

console.log(findMax(A, n));
