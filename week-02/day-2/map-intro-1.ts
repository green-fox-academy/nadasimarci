'use strict';

// Create an empty map where the keys are integers and the values are characters
let map: any = [];
console.log(map);

// Print out whether the map is empty or not
if (map.length > 0) {
    console.log('The map is not empty.');
}
else {
    console.log('The map is empty.');
}

// Add the following key-value pairs to the map
map = {
    97: 'a',
    98: 'b',
    99: 'c',
    65: 'A',
    66: 'B',
    67: 'C'
}

console.log(map);

// Print all the keys
console.log(Object.keys(map));

// Print all the values
console.log(Object.values(map));

// Add value D with the key 68
map[68] = 'D';
console.log(map);

// Print how many key-value pairs are in the map
console.log((Object.keys(map).length + Object.values(map).length) / 2);

// Print the value that is associated with key 99
console.log(map[99])

// Remove the key-value pair where with key 97
delete (map[97]);
console.log(map);

// Print whether there is an associated value with key 100 or not
if (map[100] == true) {
    console.log('there is an associated value with key 100')
}
else {
    console.log('there is no associated value with key 100')
}

// Remove all the key-value pairs 
map = [];
console.log(map);
