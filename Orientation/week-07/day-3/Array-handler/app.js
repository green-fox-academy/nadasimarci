const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.post('/arrays/:action', (req, res) => {
  let what = req.params.action;
  let numArray = [1, 2, 5, 10];

  if (what === "sum") {
    res.json({result: sumNumbers(numArray)})
  }
  else if (what === "multiply") {
    res.json({result: multiplyNums(numArray)})
  }
  else if (what === "double") {
    res.json({result: doubleNums(numArray)})
  }
});

function sumNumbers(numArray) {
  let resultSum = 0;
  for (let i = 0; i < numArray.length; i++) {
    resultSum += numArray[i];
  };
  return resultSum;
};

function multiplyNums (numArray) {
  return numArray.reduce( (a,b) => a * b ); 
};

function doubleNums (numArray) {
  for (let i = 0; i < numArray.length; i++) {
    numArray[i] = numArray[i]*2;
  };
  return numArray;
};


app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
