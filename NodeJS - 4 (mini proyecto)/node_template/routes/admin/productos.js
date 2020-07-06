const express = require("express");
const router = express.Router();
const { getProducts, create, update } = require("./../../models/producto");
const { getCategories } = require("./../../models/categoria");

router.get("/baja/:id", async (req, res) => {
  try {
    //   XMLHTTPRequest
    const { id } = req.params;
    const result = await update(id, { estado: 0 });
    res.redirect("/admin/productos");
  } catch (error) {}
});

/* /admin/productos/alta */

router.get("/alta", async (req, res) => {
  const categorias = await getCategories();
  res.render("altaproducto", { categorias }); // categorias
});

router.post("/alta", async (req, res) => {
  try {
    const { nombre, descripcion, id_categoria, precio, descuento } = req.body;
    const object = {
      nombre: nombre,
      descripcion: descripcion,
      id_categoria: parseInt(id_categoria),
      precio: precio,
      descuento: descuento,
    };
    const result = await create(object);
    console.log(`El insert id retornado es : ${result}`);
    res.render("altaproducto", { message: "Producto dado de alta" });
  } catch (error) {
    console.log(error);
    // error.hbs
  }
});

/* Cargar todos los productos en la página */
router.get("/", async (req, res) => {
  try {
    const productos = await getProducts();
    res.render("adminprods", { productos });
  } catch (error) {}
});
/* Publicar productos */

module.exports = router;
