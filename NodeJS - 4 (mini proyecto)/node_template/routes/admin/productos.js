const express = require("express");
const router = express.Router();
const { getProducts, create } = require("./../../models/producto");
const { getCategories } = require("./../../models/categoria");
/* /admin/productos/alta */
router.get("/alta", async (req, res) => {
  const categorias = await getCategories();
  res.render("altaproducto", { categorias }); // categorias
});

router.post("/alta", async (req, res) => {
  console.log(req.body);
  const { nombre, descripcion, id_categoria, precio, descuento } = req.body;
  const object = {
    nombre: nombre,
    descripcion: descripcion,
    id_categoria: parseInt(id_categoria),
    precio: precio,
    descuento: descuento,
  };
  await create(object);
});

/* Cargar todos los productos en la página */
router.get("/", async (req, res) => {
  try {
    const productos = await getProducts();
    console.log(productos);
    res.render("adminprods", { productos });
  } catch (error) {}
});
/* Publicar productos */

module.exports = router;
