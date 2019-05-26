'use strict';

const dotenv = require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;

const app = express();

const table_book_mast = 'book_mast';

app.use('/public', express.static('public'));
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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/Public/index.html'));
});

app.get('/alltitles', (req, res) => {
  
  conn.query(`SELECT book_name FROM ${table_book_mast};`, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    };
    console.log('data successfully requested from DB');
    res.send(result);
    //res.json(result);
  });
});

app.get('/allbooks', (req, res) => {
  
  conn.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM ${table_book_mast}
    JOIN category ON book_mast.cate_id = category.cate_id
    JOIN author ON book_mast.aut_id = author.aut_id
    JOIN publisher ON book_mast.pub_id = publisher.pub_id;`, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    };
    console.log('data successfully requested from DB');
    res.send(result);
    //res.json(result);
  });
});

app.listen(PORT, () => {console.log(`Server is up and running on port ${PORT} 🔥`);});