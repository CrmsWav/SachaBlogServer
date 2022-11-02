import express from "express"
import dotenv from "dotenv"
import mysql from "mysql2"
import cors from "cors"

const app = express()

dotenv.config()
const port = process.env.PORT || 5000

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'blog_sacha',
  port: 8889
});

db.connect(function(err) {
  if(err) throw err;
  console.log("Connected to MySQL database");
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
//   const sqlInsert = "INSERT INTO users (name, email, phone) VALUES ('Resval', 'Resval@gmail.com', '0713413413');"

//   db.query(sqlInsert, (err, result) => {
//     console.log('err', err);
//     console.log('result', result);
//     console.log('Hello World');
//   });
})

app.get('/api/get', (req, res) => {
    const sqlGet = "SELECT * FROM users";

    db.query(sqlGet, function (err, result) {
      res.send(result);
    });
})

app.listen(port, () => console.log(`App listening on port 5000 !`))
