// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
'use strict';

const fs = require('fs');

let fileContent = 'Marci';
fs.writeFileSync('my-file.txt', fileContent);

// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

try {
  let fileContent = fs.readFileSync('my-file.txt', 'UTF-8');
  console.log(fileContent);
}
catch (err) {
  console.log('Unable to write file: ' + err.path);
}
