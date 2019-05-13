// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

let givenParameter: number = 5;

function sum (number): any {
let sum = 0
for ( let i = 1 ; i <= givenParameter; i++) {
    sum += i
}
return sum;
}
console.log(sum(givenParameter));