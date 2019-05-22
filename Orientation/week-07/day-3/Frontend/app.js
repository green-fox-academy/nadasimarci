const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// DOUBLING
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

// GREETER
app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  let greetObject = {
    "received": name + title,
    "welcome_message": `Oh, hi there ${name}, my dear ${title}!`
  } 

  if (name === undefined && title === undefined){
    res.send({"error":"Please provide a name and title"})
  } 
  else if (name === "undefined" || name === null || name === ""){
    res.send({"error":"Please provide a name!"})
  } 
  else if (title === "undefined" || title === null || title === ""){
    res.send({"error":"Please provide a title!"})
  } 
  else {
  res.send(greetObject)}
});

// APPEND A
app.get('/appenda/:inputWord', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});

  let response = {
    'appended': req.params.inputWord + 'a'
  }

  res.end(JSON.stringify(response));
});

app.get('/appenda', (req, res) => {
  res.status(404).send();
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
