'use strict';

//Tools
const express = require('express');
const cors = require('cors');

//Routes
const routes = require('./route.js')

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());


//Apply Routes
app.use(routes);

app.get('/', (req, res) => {
  res.send(200, 'YARPPP')
});

app.listen(PORT, () => {
  debug(`App serving on Port: ${PORT}`)
})
