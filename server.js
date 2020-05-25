const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./serverSide/db');
const pizzaRouter = require('./serverSide/routes/pizza-router');

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// Making sure its runing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', pizzaRouter);

app.listen(apiPort, () => console.log(`🌎 Server running on port ${apiPort}`));
