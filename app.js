const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.send({message: 'this is working, but under construction!'})
})
module.exports = app;