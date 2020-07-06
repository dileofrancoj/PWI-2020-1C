var express = require("express");
var router = express.Router();
const imgHandler = require("./../utils/imageHandler");
const multer = require("multer");
const config = { dest: "./public/tmp" }; // si no está creada -> multer la crea
/* GET home page. */
const upload = multer(config);
router.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});
// array -> Multiples archivos
// single -> Subir un unico archivo multimedia
router.post("/", upload.single("foto"), (req, res) => {
  // console.log(req.file)
  const { nombre, descripcion } = req.body;
  const img = imgHandler.saveImage(req.file);
  console.log(`La imagen se guardo como ${img}`);
  const obj = {
    nombre,
    descripcion,
    imagen: img,
  };
  // {nombre : 'pantalon', descripcion : 'Usa el pantalon eleven y toma clases desde la como...', imagen :  : ' df0187d6-f7bb-4087-88c8-fbc2fe245308.png'}
  // await service.add(obj);
  res.send();
});

module.exports = router;
