'use strict';

// Create a list ('List A') which contains the following values
let list_A: any[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
console.log(list_A);

// Create a new list ('List B') with the values of List A
let list_B = list_A;
console.log(list_B);

// Print out whether List A contains Durian or not
console.log(list_A.indexOf("Durian") !== -1 ? "List A contains Durian" : "List A does not contain Durian");

// Remove Durian from List B
list_B.splice(3, 1);
console.log(list_B);

// Add Kiwifruit to List A after the 4th element
list_A.splice(4, 0, "Kiwifruit");
console.log(list_A);

// Compare the size of List A and List B
console.log(list_A.length === list_B.length ? "same size" : "different size");

// Get the index of Avocado from List A
console.log(list_A.indexOf('Avocado'));

// Get the index of Durian from List B
console.log(list_B.indexOf('Durian'));

// Add Passion Fruit and Pummelo to List B in a single statement
list_B.splice(list_B.length, 0, 'Passion Fruit', 'Pomelo');
console.log(list_B);

// Print out the 3rd element from List A
console.log(list_A[2]);