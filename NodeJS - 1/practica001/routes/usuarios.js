const express = require('express');
const router = express.Router(); // routing verbos http

// http://localhost:3000/login/
router.get('/',(req,res)=> {
    res.render('login');
})

router.post('/',(req,res)=> {
    console.log("Me enviaron datos desde el login");
})



// req -> informacion del formulario

module.exports = router;