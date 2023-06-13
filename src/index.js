const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const { dbConnection } = require('../db/mongodb');
require('dotenv').config()
const port = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

router(app)


app.listen(port, () => {
    console.log(`Server running at ${port}`)
})
dbConnection()
