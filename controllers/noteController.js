const pg = require('pg');
const URI = process.env.DBURI;



const noteController = {

  postdata : (req, res, next) => {
    pg.connect(URI, (err, db) =>{
      let PromiseArray = [];
      let {code, title, did, date_prod, kind, len} = req.body
      let promise = new Promise((resolve, reject) => {
        let q = 'INSERT INTO films(code, title, did, date_prod, kind, len) VALUES ('$(code)', '$(title)', '$(did)', '$(date_prod)', '$(kind)', '$(len)');';
        console.log("Our query is read: ", q);

        db.query(q, (err, results) => {
          if (err) console.log(err)
          resolve();
        });
      });
      
    }
  }



}



// INSERT INTO films VALUES
//     ('UA502', 'Bananas', 105, '1971-07-13', 'Comedy', '82 minutes');
//        code  |  title  | did  | date_prod  |  kind  |   len    