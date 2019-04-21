// Create a method that decrypts duplicated-chars.txt

'use strict';

const fs = require('fs');

const fileContent = fs.readFileSync("duplicated-chars.txt", 'utf8')

function doubled(file: any) {
  let split = file.split("\n")
  let result = ""
  for (let i = 0; i < split.length; i++) {
    for (let j = 0; j < split[i].length; j += 2) {
      result += split[i][j]
    } result += `\n`
  }
  return result
}

console.log(doubled(fileContent));

