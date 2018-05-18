const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();
const app = express();

const { Pool, Client } = require('pg')
const connectionString = `
postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;


// const pool = new Pool({
//   connectionString: connectionString,
// })

// pool.query('SELECT * FROM films', (err, res) => {
//   console.log(err, res)
//   pool.end()
// });

const client = new Client({
  connectionString: connectionString,
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

app.get()


// app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.use(express.static(__dirname, 'build'));

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));




