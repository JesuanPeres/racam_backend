const express = require('express');

const app = express();


app.get('/' , (req,res) => {
    res.json(
        {
            frase: "é nois q voa"
        }
    );


});

const PORT = 3333;
app.listen(PORT, console.log(`estou a funcionar na porta ${PORT}`));

