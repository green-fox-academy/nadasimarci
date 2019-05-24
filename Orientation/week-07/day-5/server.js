'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
require('dotenv').config();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

conn.connect(err => {
    if (err) {
      console.log(err.toString());
      return;
    }
console.log('connection to DB is OK ✨');
});

// TEST SERVER
app.get('/hello', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => {
console.log(`Server is up and running on port ${PORT} 🔥`);
});
