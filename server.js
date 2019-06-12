'use strict';

//Tools
const express = require('express');
const cors = require('cors');

//Routes
const routes = require('./route.js');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());


//Apply Routes
app.use(routes);

app.get('/', (req, res) => {
  res.status(200).send('AP Testing Server')
});

app.listen(PORT, () => {
  console.log(`App serving on Port: ${PORT}`)
})
