const express = require('express');
const router = express.Router(); 
// productos[0] ->  {id : 1,nombre : 'Shampoo', descripcion : 'El mejor shampoo para niños', precio : 180},
const productos = [
    {id : 1,nombre : 'Shampoo', descripcion : 'El mejor shampoo para niños', precio : 180, imagen : 'shampoo.jpg', stock : 10},
    {id : 2, nombre : 'Jabon', descripcion : 'Jabon que hace mucha espuma en la ducha', precio : 210, stock : 10, imagen : 'jabon.jpg'},
    {id : 3, nombre : 'Esponja', descripcion : 'La MÁS suave de todas las esponjas del local', precio : 400, imagen : 'esponja.jpg', stock : 10},
    {id : 4, nombre : 'Desinfectante', descripcion : 'Desinfectante con aroma a lavanda y mata el covid de un saque', precio : 520, stock : 10, imagen : 'desinfectante.jpg'},
    {id : 5, nombre: 'Desodorante', descripcion : 'Nunca te voy a abandonar :D', precio : 120, imagen : 'desodorante.jpg', stock : 10}     
]
//  a través del modelo de datos se tienen que cargar todos los productos de la página
router.get('/all',(req,res)=> {
    // Ruta encargada de mostrar TODOS los productos
    res.render('productos',{productos : productos, reason : 'all'})
})

// params     vs  query
// producto/1 vs ?producto=1
router.get('/:id', (req,res)=> {
    let id_producto = req.params.id;
    let producto = productos.find(producto => producto.id == id_producto);
    res.render('producto',{producto : producto})
})

module.exports = router