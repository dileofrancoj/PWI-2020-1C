const express = require('express');
// requierere | lenght
// require | length
const router = express.Router();

router.get('/',(req,res)=> {
    // request -> todo lo que el usuario envia al sv
    // res -> todo lo que el server envia al usuario

    res.render('contacto',{titulo : 'Contacto'})
})

router.post('/',(req,res)=> {
    // almacenas las variables 
    // envias el correo
    // OK -> ENVIO CORREO
    // NO --> NO SE ENVIO EL CORREO
})

module.exports = router;