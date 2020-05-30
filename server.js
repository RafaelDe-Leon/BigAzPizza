const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

const db = require('./serverSide/db');
const routes = require('./serverSide/routes');

const app = express();
const apiPort = 3001;

//use sessions for tracking logins
app.use(session({ secret: 'keyboard cat', cookie: {} }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(routes);

app.listen(apiPort, () => console.log(`🌎 Server running on port ${apiPort}`));
