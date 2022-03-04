import express from "express";
import { isPrime, sumFunc } from "./util/numbers.js";
import cors from 'cors';
const err = import('express-async-errors');
import path from 'node:path'
const app = express();
const port = process.env.PORT || 5000;



app.use(cors());

app.get("/myapi", (req, res) => {
  if (req.query.action === "sumandcheck") {
    let numbers = req.query.numbers.split(",").map(Number);
    let sum = sumFunc(numbers);
    console.log(sum);
    res.json({ result: sum, isPrime: isPrime(sum) });
  } else if (req.query.action === "checkprime") {
    let number = parseInt(req.query.number);
    res.json({ isPrime: isPrime(number) });
    console.log(number)
  }
});

app.use(express.static('client/build'));
app.get('*',(req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build','index.html'))
})

app.listen(port, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log(`App listening on port ${port}`);
});
