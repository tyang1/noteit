const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pg = require('pg');

const URI = process.env.DBURI;
const app = express();

pg.connect(URI, (err, db) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log('connected to db')
  }

});

const PORT = 5535;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports = server;



