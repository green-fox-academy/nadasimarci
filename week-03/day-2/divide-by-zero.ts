// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

'use strict';

function divide(num) {
  try {
    if (num === 0) { throw 'fail' }
    else console.log(10 / num)
  }
  catch (e) { console.log(e) }
}

divide(0);

