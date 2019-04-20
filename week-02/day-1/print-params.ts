//Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

'use strict';

function printParams(paramOne: string = 'Hello', paramTwo: number = 5, paramThree: boolean = true) {
  return (paramOne + ' ' + paramTwo + ' ' + paramThree);

}
console.log(printParams());

