const express = require('express');
const passport = require('passport');
const passportLocal = require("passport-local").Strategy;
const  cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");

require('dotenv').config();

require('./src/config/db');

const sessionConfig = require('./src/config/session');
const routes = require('./src/routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: process.env.FRONT_END_URL,
  credentials: true
}));

app.use(session(sessionConfig));
app.use(cookieParser(sessionConfig.secret));
// app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
require('./src/config/auth')(passport);
app.use(routes);


const PORT = 8080;
app.listen(PORT, console.log(`estou a funcionar na porta ${PORT}`));
