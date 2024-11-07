require('dotenv').config();

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to microservice A'});
})

app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT);
})
