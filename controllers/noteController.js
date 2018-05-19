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

const connectionString = 'postgres://aupadlon:R9jDOCvYOaWQN_KEVFDez3UOVzV2tRIb@elmer.db.elephantsql.com:5432/aupadlon'

const client = new pg.Client({connectionString})

client.connect(function (err) {
  if (err) {
    console.log("client connect: ", err);
  } else {
    console.log('success?');
  }
});


const noteController = {

  getAllNotes(req, res) {
    console.log('hitting getAllNotes in notesController');

    client.query('SELECT * FROM notes;', (err, results) => {
      console.log('in notes');
      if (err) {
        console.log(err);
      } else {
        res.json(results.rows);
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
