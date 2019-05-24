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

// LISTING THE POSTS
app.get('/posts', (req, res) => {
    conn.query(`SELECT * FROM posts;`, (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500);
        return;
      }
      console.log('data successfully requested from DB');
      res.status(200).json(rows);
    });
});

// ADDING A NEW POST
app.post('/posts', (req, res) => {
    conn.query(`INSERT INTO posts (title, url) VALUES ("${req.body.title}", "${req.body.url}");`, (err,rows) => {
        if (err) {
            console.log(err.toString());
            res.status(500);
            return;
        }
        console.log('data successfully inserted into DB');
        res.status(200).json(rows);
    });

    conn.query(`SELECT * FROM posts ORDER BY id DESC LIMIT 1;`, (err, rows) => {
        if (err) {
            console.log(err.toString());
            res.status(500);
            return;
        }
        res.status(200).json(rows);
    });
});

// VOTING - UP

app.put('/posts/:id/upvote', (req, res) => {
let post_id = req.params.id;

    conn.query(`UPDATE posts SET score = score + 1 WHERE id = ${post_id};`, (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500);
        return;
      }
    
      conn.query(`SELECT score FROM posts WHERE id=${post_id};`, (err, rows) => {
        if (err) {
          console.log(err.toString());
          res.status(500);
          return;
        }
        console.log('UPVOTE!');
        res.status(200).json(rows);
        });
    });
});

// VOTING - DOWN
app.put('/posts/:id/downvote', (req, res) => {
let post_id = req.params.id;
    
    conn.query(`UPDATE posts SET score = score - 1 WHERE id = ${post_id};`, (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500);
        return;
      }
    
      conn.query(`SELECT score FROM posts WHERE id=${post_id};`, (err, rows) => {
        if (err) {
          console.log(err.toString());
          res.status(500);
          return;
        }
        console.log('DOWNVOTE!');
        res.status(200).json(rows);
        });
    });
});


app.listen(PORT, () => {
console.log(`Server is up and running on port ${PORT} 🔥`);
});
