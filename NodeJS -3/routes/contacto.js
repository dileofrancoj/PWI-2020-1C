const express = require('express');
const router = express.Router();


router.post('/', async (req,res)=> {
    try {
        console.log(req.body);
        res.end();
    } catch (error) {
        console.log(error);
    }
})

router.get('/', (req,res)=> {
    res.render('contacto');
})



module.exports = router;
