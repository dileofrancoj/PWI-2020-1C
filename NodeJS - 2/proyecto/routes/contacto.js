const express = require('express');
const router = express.Router();


router.post('/', async (req,res)=> {
    try {
        console.log("Entro a post de contacto")
        console.log(req);
        // res.end();
    } catch (error) {
        console.log(error);
    }
})

router.get('/', (req,res)=> {
    res.render('contacto');
})



module.exports = router;
