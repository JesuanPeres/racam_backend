const router = require('express').Router();


router.get('/' , (req,res) => {
    res.json(
        {
            frase: "é nois q voa"
        }
    );
});


module.exports = router;