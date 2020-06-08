const mongoose = require('mongoose');

const uri = process.env.DB_CONNECTION;

mongoose.connect(uri, {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', ()=> console.log('Não foi possível conectar ao banco'));

db.on('open', ()=> console.log('Conexão com o banco efetuada com sucesso!'));