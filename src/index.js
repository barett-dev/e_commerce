const express = require('express');
const router = require('./routes');
const { dbConnection } = require('../db/mongodb');
require('dotenv').config()
const port = process.env.PORT;
const app = express();

router(app)
dbConnection()

app.use(express.json());
app.listen(port, () => {
    console.log(`Server running at ${port}`)
})

