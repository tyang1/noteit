'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pg = require('pg');
const noteController = require ('./controllers/noteController');

require('dotenv').config();
const app = express();

const PORT = 5535;

//const server = http.createServer(app);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/postdata', noteController.postdata);
app.get('/getdata', noteController.getdata);

// app.post('/signup', )

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
