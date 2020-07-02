const express = require('express');
require('dotenv').config();

require('./src/config/db');
const routes = require('./src/routes');

const app = express();

app.use(express.json());    
app.use(routes);

const PORT = 3333;
app.listen(PORT, console.log(`estou a funcionar na porta ${PORT}`));

