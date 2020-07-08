var express = require("express");
var router = express.Router();
const sha1 = require("sha1");
// const {alta} = require('categoriasModel');
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Dar de alta una categoria
router.post("/", async (req, res) => {
  try {
    console.log("Hi async");
    console.log(req.body);
    const obj = ({ nombre, descripcion } = req.body);
    // const result = await alta(obj);
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false });
  }
});
module.exports = router;
