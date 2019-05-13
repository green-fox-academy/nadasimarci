// Write a function that computes a member of the fibonacci sequence by a given index
// Create tests for multiple test cases.

'use strict';

export function fibonacci(x: number) {
  if (x === 2) {
    return 1;
  }
  else if (x === 1) {
    return 0;
  }
  return fibonacci(x - 1) + fibonacci(x - 2);
}

