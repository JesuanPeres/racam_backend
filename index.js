const express = require('express');
const passport = require('passport');
const session = require('cookie-session');
require('dotenv').config();

require('./src/config/auth');
require('./src/config/db');

const sessionConfig = require('./src/config/session');
const routes = require('./src/routes');

const app = express();

app.use(session(sessionConfig));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

const PORT = 3333;
app.listen(PORT, console.log(`estou a funcionar na porta ${PORT}`));

