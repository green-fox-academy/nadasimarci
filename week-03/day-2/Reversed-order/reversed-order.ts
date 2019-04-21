// Create a method that decrypts reversed-order.txt

'use strict';

const fs = require('fs');
const fileContent = fs.readFileSync("reversed-order.txt", 'utf8')

function reversedLine(file: any) {
  let split = file.split("\n")
  let result = ""
  for (let i = split.length - 1; i > 0; i--) {
    result += split[i]
    result += `\n`
  }
  return result
}


console.log(reversedLine(fileContent))

