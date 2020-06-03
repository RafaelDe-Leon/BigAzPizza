const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const morgan = require('morgan');

const db = require('./serverSide/db');
const routes = require('./serverSide/routes');
const mongoose = require('mongoose');

const app = express();
// const apiPort = 3001;
const PORT = process.env.PORT || 3001;
//use sessions for tracking logins
app.use(session({ secret: 'keyboard cat', cookie: {} }));

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

//logs
app.use(morgan('dev'));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// connect to mongo db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern-auth');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(routes);

app.listen(PORT, () => console.log(`🌎 Server running on port ${PORT}`));
