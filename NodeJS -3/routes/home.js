const express = require('express');
const router = express.Router(); 

// CRUD -> CREATE REATE UPDATE DELETE (POST, GET, PUT, DELETE)
// CALLBACK FUNCION DENTRO DE UNA FUNCION
router.get('/',(req,res)=> {
    // Productos dinamicos (base de datos)
    let productos = [
        {id : 1,nombre : 'Shampoo', descripcion : 'El mejor shampoo para niños', precio : 180},
        {id : 2, nombre : 'Jabon', descripcion : 'Jabon que hace mucha espuma en la ducha', precio : 210},
        {id : 3, nombre : 'Esponja', descripcion : 'La MÁS suave de todas las esponjas del local', precio : 400, imagen : 'esponja.jpg'},
        {id : 4, nombre : 'Desinfectante', descripcion : 'Desinfectante con aroma a lavanda y mata el covid de un saque', precio : 520}

    ]
    res.render('home',{title : 'Bienvenidos al sitio', productos : productos});
})

module.exports = router;