var express = require('express');
var router = express.Router();
const productoService = require('./../models/producto');
const {getCategories} = require('./../models/categoria');
router.get('/', async (req,res)=> {
  const productos = await productoService.getProducts();
  const categorias = await getCategories();
  console.log(categorias)
  res.render('index', { 
      title: 'eSHOP ELEVEN - HOME' , 
      productos,
      categorias
    }
    );
});

module.exports = router;
