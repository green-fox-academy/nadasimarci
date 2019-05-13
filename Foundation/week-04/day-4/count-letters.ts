// Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys,
// and numbers as values that shows how many occurrences there are.
// Create a test for that

'use strict';

export function allLettersAsKeys(input: string): any {
  let counter: any = {};

  for (let i: number = 0; i < input.length; i++) {
    if (counter[input[i]]) {
      counter[input[i]] += 1;
    } else {
      counter[input[i]] = 1;
    }
  }
  return counter;
}

