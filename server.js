import express from "express";
import { isPrime, sumFunc } from "./util/numbers.js";
import cors from 'cors';
var err = import('express-async-errors');
const app = express();
const port = process.env.port || 80;

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

app.listen(port, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log(`App listening on port ${port}`);
});