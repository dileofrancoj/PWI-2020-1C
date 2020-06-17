var express = require('express');
var router = express.Router();
const productoService = require('./../models/producto');
// const {getProducts} = require('./../models/producto')

router.get('/', async (req,res)=> {
  const productos = await productoService.getProducts();
  console.log(productos);
  res.render('index', { title: 'eSHOP ELEVEN - HOME' , productos});
});

module.exports = router;
