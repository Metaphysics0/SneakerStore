require('dotenv').config();
const express = require('express');
require('./database/mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

// Middlewares
app.use(
  cors({
    // origin: true,
    origin: 'http://localhost:3000', //  Need to change to 'true' once we deploy the app
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', require('./routes/routes'));

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
