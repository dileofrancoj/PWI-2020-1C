var express = require("express");
var router = express.Router();
const { list } = require("./../models/usuarios");
/* GET users listing. */
router.get("/", async (req, res, next) => {
  const result = await list();
  console.log(result);
  res.render("usuarios", { usuarios: result });
});

module.exports = router;
