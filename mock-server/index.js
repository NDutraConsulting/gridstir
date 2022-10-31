//const { bigData } = require('./data');
const { smallData } = require('./small-data');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // For legacy browser support
};

const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.get('/chargers', (req, res) => {
  res.status(200).send(smallData);
});

app.get('/chargers/small-data', (req, res) => {
  res.status(200).send(smallData);
});

app.listen(4000, () => {
  console.log('Listening on 4000');
});
