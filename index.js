const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

function greetingFunction() {
  return 'Welcome to our server';
}
app.get('/welcome', (req, resp) => {
  resp.send(greetingFunction());
});

function greetingMessage(username) {
  return 'Welcome ' + username + ' !';
}
app.get('/greeting', (req, res) => {
  let user = req.query.username;
  res.send(greetingMessage(user));
});

function checkPassword(password) {
  if (password.length > 15) {
    return 'Password is strong';
  } else {
    return 'Password is weak;';
  }
}
app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
});

function calculateSum(num1, num2) {
  let sum = parseFloat(num1) + parseFloat(num2);
  return sum.toString();
}
app.get('/sum', (req, res) => {
  let num1 = req.query.num1;
  let num2 = req.query.num2;
  res.send(calculateSum(num1, num2));
});
function checkSubscription(user, sub) {
  let subscribe = sub === 'true';
  if (subscribe) {
    return user + 'is subscribed';
  } else {
    return user + 'is not subscribed';
  }
}

app.get('/subscribe', (req, res) => {
  let username = req.query.username;
  let subscribe = req.query.subscribe;
  res.send(checkSubscription(username, subscribe));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
