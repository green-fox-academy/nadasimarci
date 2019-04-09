'use strict';

// Create a map where the keys are strings and the values are strings with the following initial values
let map2: any = [];

map2 = {
    '978-1-60309-452-8': 'A Letter to Jo',
    '978-1-60309-459-7': 'Lupus',
    '978-1-60309-444-3': 'Red Panda and Moon Bear',
    '978-1-60309-461-0': 'The Lab',
    }

console.log(map2);

// Print all the key-value pairs in the following format
/* A Letter to Jo (ISBN: 978-1-60309-452-8)
Lupus (ISBN: 978-1-60309-459-7)
Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
The Lab (ISBN: 978-1-60309-461-0) */
for (let i: number = 0; i < Object.keys(map2).length; i++){
    console.log(`${map2[Object.keys(map2)[i]]} (ISBN: ${Object.keys(map2)[i]})`)
}

// Remove the key-value pair with key 978-1-60309-444-3
delete (map2['978-1-60309-444-3']);
console.log(map2);

// Remove the key-value pair with value The Lab
Object.keys(map2).forEach(i => map2[i] === 'The Lab' ? delete map2[i]: "");
console.log(map2)

// Add the following key-value pairs to the map

// Print whether there is an associated value with key 478-0-61159-424-8 or not

// Print the value associated with key 978-1-60309-453-5