// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const { auth } = require('express-openid-connect');

//import routes
const routes = require('./routes/routes');

// db
mongoose
  .connect(process.env.MONGODB_URI || process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB Connected'));

//auth0
app.use(
  auth({
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    authRequired: false,
    auth0Logout: true,
    idpLogout: true,
  })
);

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.use('/api', routes);

// server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
