//jshint esversion:6
require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database');

app.get('/status', (req, res) => res.send('Working!'));

app.route('/yes')
  .get(function(req, res, next) {
    connection.query(
      "SELECT * FROM testTable",
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });

// Port 8080 for Google App Engine
app.set('port', process.env.PORT || 3000);
app.listen(3000);
