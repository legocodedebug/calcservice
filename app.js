const myArgs = process.argv.slice(2);
const myPort = myArgs[0] ? myArgs[0] : 3000;

const express = require("express");
const app = express();
const port = myPort;
let counter = 0;

app.get("/", (req, res) => {
  counter++;
  res.send(`Hello World! ${counter}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

function sayHelloA() {
  let counterA = counter++;
  console.log(`HelloA ${counterA}`);
}

function sayHelloB() {
  let counterB = counter + 2;
  console.log(`HelloB ${counterB}`);
}

// setInterval(sayHelloA, 5000);
// setInterval(sayHelloB, 10000);

function sum(a, b) {
  return a + b;
}
module.exports = sum;
