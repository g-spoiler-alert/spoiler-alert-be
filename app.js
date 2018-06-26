const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const route = require("./router/routes")
const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api/v1/', route)

module.exports = app;