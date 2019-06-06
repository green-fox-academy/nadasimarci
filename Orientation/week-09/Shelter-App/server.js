'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');
const PORT = 3022;

const mysqlConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'shelter'
});

mysqlConn.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  else {
    console.log('connection to DB is OK');
  }
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.post('/', (req, res) => {
  if(req.body.name !== '' || req.body.age !== '') {
    mysqlConn.query(`INSERT INTO dogs (name, age, date, hashome) VALUES (?, ?, ?, ?)`, [req.body.name, req.body.age, new Date(req.body.date), req.body.hashome], (err, docs) => {
      if (err) {
        res.status(500).json(err);
      }
      else {
        res.status(200).json(docs);
      }
    });
  }
  else {
    res.status(500).json({error: 'missing fields'});
  }
});

app.delete('/delete/:id', (req, res) => {
  // console.log(req.params.id);
  // res.json({});
  mysqlConn.query(`DELETE FROM dogs WHERE id = ?`, [req.params.id], (err, docs) => {
    if (err) {
      res.status(500).json(err);
    }
    else {
      res.status(200).json(docs);
    }
  });
})

app.patch('/takehome/:id', (req, res) => {
  mysqlConn.query(`UPDATE dogs SET hashome = TRUE WHERE id = ?`, [req.params.id], (err, docs) => {
    if (err) {
      res.status(500).json(err);
    }
    else {
      res.status(200).json(docs);
    }
  });
});

app.get('/getDogs', (req, res) => {
  mysqlConn.query(`SELECT * FROM dogs`, (err, docs) => {
    if (err) {
      res.status(500).json(err);
    }
    else {
      res.status(200).json(docs);
    }
  });
});

app.listen(PORT, () => {console.log(`Server is up and running on port ${PORT}`);});
