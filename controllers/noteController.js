/*
  _id         serial PRIMARY KEY,
  title       VARCHAR(255),
  url         TEXT,
  html        TEXT,
  css         TEXT,
  user_id     INTEGER NOT NULL,
  created_at  timestamptz DEFAULT now(),
  updated_at  timestamptz DEFAULT now(),
  FOREIGN KEY (user_id) REFERENCES users (_id)
*/

const pg = require('pg');
require('dotenv').config();
const bodyParser = require('body-parser');

const client = new pg.Client({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  host: process.env.PGHOST,
  ssl: true
});

client.connect(function (err) {
  if (err) {
    console.log("client connect: ", err);
  }
});


const noteController = {

  getAllNotes(req, res) {
    console.log('hitting getAllNotes in notesController');

    client.query('SELECT * FROM notes', (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.json(results);
      }
      client.end();
    });
  },

  // getNotesByUser: {
  // },

  // getNoteByID: {
  // },

  // createNote: {
  // },

  // deleteNote: {
  // },

  // updateNote: {
  // }

}

module.exports = noteController; 
