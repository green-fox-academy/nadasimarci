// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

'use strict';

const fs = require('fs');

let sourceFile: string = 'copy-file.txt';
let targetFile: string = 'copy-file-2.txt';

function copyContent(source: string, target: string): boolean {
  try {
    fs.writeFileSync(target, fs.readFileSync(source, 'utf-8'));
    return true;
  }
  catch{
    return false;
  }
}
console.log(copyContent(sourceFile, targetFile));
