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

// app.post('/add', (req, res) => {
//   conn.query(
//     `INSERT INTO ${table} (name, height) VALUES ("${req.body.name}", ${
//       req.body.height
//     });`,
//     (err, rows) => {
//       if (err) {
//         console.log(err.toString());
//         return;
//       }
//       console.log('data successfully added to database');
//       res.status(201).send(rows);
//     }
//   );
// });

// LIST BOOK TITLES
app.get('/alltitle', (req, res) => {
  conn.query(`SELECT book_name FROM book_mast;`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    console.log('data successfully requested from DB');
    res.json(rows);
  });
});

// ALL BOOKS WITH FULL DATA
app.get('/fulldata', (req, res) => {
  conn.query(`SELECT book_name AS 'Title of Book', author.aut_name AS 'Name of Author', category.cate_descrip AS 'Category', publisher.pub_name AS 'Publsiher', book_mast.book_price AS 'Price' FROM book_mast
  INNER JOIN author ON author.aut_id=book_mast.aut_id
  INNER JOIN category ON category.cate_id=book_mast.cate_id
  INNER JOIN publisher ON publisher.pub_id=book_mast.pub_id
  ORDER BY book_mast.book_id ASC;`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    console.log('data successfully requested from DB');
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT} 🔥`);
});
