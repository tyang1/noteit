const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pg = require('pg');

require('dotenv').config();
const app = express();

// const pool = new Pool({
//   connectionString: connectionString,
// })

// pool.query('SELECT * FROM films', (err, res) => {
//   console.log(err, res)
//   pool.end()
// });

const client = new pg.Client({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  host: process.env.PGHOST,
  ssl: true
});

client.connect()

client.query('SELECT * FROM films', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.rows);
  }
  client.end()
});

// ROUTES


const PORT = 5535;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));




