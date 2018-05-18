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

client.connect(function(err) {
  if(err) console.log("client connect: ", err);
})




const noteController = {

  postdata : (req, res) => {
    console.log(req.body);

    
      let {code, title, did, date_prod, kind, len} = req.body;
      // let promise = new Promise((resolve, reject) => {
        let q = `INSERT INTO films(code, title, "did", date_prod, kind, len) VALUES ('${code}', '${title}', '${did}', '${date_prod}', '${kind}', '${len}' );`;
        console.log("Our query is read: ", q);

        client.query(q, (err, results) => {
          if (err) console.log(err)
          else console.log(results);
          // resolve();
        });
      // });
  // Promise.all(promise)
  // .then(() => {
  //   console.log("Promise got resolved");
  //   db.end()
  // })
  // .catch((err) => {
  //   console.log("Error promise", err)});
},

  getdata : (req, res) => {

  client.query('SELECT * FROM ', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.rows);
  }
  client.end()
});
  }
}

module.exports = noteController; 



// INSERT INTO films VALUES
//     ('UA502', 'Bananas', 105, '1971-07-13', 'Comedy', '82 minutes');
//        code  |  title  | did  | date_prod  |  kind  |   len  

