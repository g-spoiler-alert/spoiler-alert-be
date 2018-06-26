const express = require('express')
const app = express()
// const pantry = require('./file/pantry')
// const users = require('./file/users')
const cors = require('cors')
const port = process.env.PORT || 3000

app.use(cors())
