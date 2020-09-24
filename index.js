const express = require('express');
const passport = require('passport');
const session = require('cookie-session');
require('dotenv').config();

require('./src/config/auth');
require('./src/config/db');

const sessionConfig = require('./src/config/session');
const routes = require('./src/routes');
var cors = require('cors')

const app = express();

app.use(cors())
app.use(session(sessionConfig));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const PORT = 8080;
app.listen(PORT, console.log(`estou a funcionar na porta ${PORT}`));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
