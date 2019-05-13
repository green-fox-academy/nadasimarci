'use strict';

// Create an empty list which will contain names (strings)
let listA: string[] = [];

// Print out the number of elements in the list
console.log(listA.length);

// Add William to the list
listA[0] = 'William';

// Print out whether the list is empty or not
if (listA.length > 0) {
    console.log('The list is not empty.');
}
else {
    console.log('The list is empty.')
}

// Add John to the list
listA[1] = 'John';

// Add Amanda to the list
listA[2] = 'Amanda';

// Print out the number of elements in the list
console.log(listA.length);

// Print out the 3rd element
console.log(listA[2]);

// Iterate through the list and print out each name
for (let i: number = 0; i < listA.length; i++) {
    console.log(listA[i])
}

// Iterate through the list and print
for (let i = 0; i < listA.length; i++) {
    console.log(i + 1 + "." + listA[i]);
}

// Remove the 2nd element
listA.splice(1, 1);
console.log(listA);

// Iterate through the list in a reversed order and print out each name
for (let i = listA.length - 1; i >= 0; i--) {
    console.log(listA[i]);
}

// Remove all elements
listA.splice(0, 2);
console.log(listA);
