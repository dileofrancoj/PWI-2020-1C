/* 
prettier (vscode)
tslint  
*/
const express = require("express");
const router = express.Router();
const productoService = require("./../models/producto");
const { getCategories } = require("./../models/categoria");
const { getTestimonios } = require("./../models/testimonio");
router.get("/", async (req, res) => {
  const productos = await productoService.getProducts();
  const categorias = await getCategories();
  const testimonios = await getTestimonios();
  res.render("index", {
    title: "eSHOP ELEVEN - HOME",
    productos,
    categorias,
    testimonios,
  });
});

module.exports = router;
