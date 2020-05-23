const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./serverSide/routes');

const db = require('./serverSide/db');
// const pizzaRouter = require('./serverSide/routes/api/pizza-router');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use(routes);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern-auth');

app.listen(PORT, () => console.log(`🌎 Server running on port ${PORT}`));
