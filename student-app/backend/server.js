const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "host.docker.internal",
  user: "root",
  password: "YOUR_PASSWORD",
  database: "studentdb"
});

app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});

app.post("/students", (req, res) => {
  const { name, age, course } = req.body;
  db.query(
    "INSERT INTO students (name, age, course) VALUES (?, ?, ?)",
    [name, age, course],
    () => res.send("Added")
  );
});

app.listen(5000, () => console.log("Backend running"));