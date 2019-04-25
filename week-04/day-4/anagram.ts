// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

'use strict';

function checkAnagram(a: string, b: string): boolean {
  let x: string = a.split('').sort().join('');
  let y: string = b.split('').sort().join('');
  return x === y;
}

console.log(checkAnagram('mark', 'kram'))

export { checkAnagram };

