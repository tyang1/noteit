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

  getNotesByUser: {

  },

  getNoteByID: {

  },

  createNote: {

  },

  deleteNote: {

  },

  updateNote: {

  }

}

module.exports = noteController; 
