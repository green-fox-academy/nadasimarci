const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  let response = {
    received: req.query.input,
    result: req.query.input * 2
  }

  if (req.query.input === undefined) {
    res.end(JSON.stringify ({error: "Please provide an input!"}));
  } else {
    res.end(JSON.stringify(response));
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
