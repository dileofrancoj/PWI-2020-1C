var express = require("express");
var router = express.Router();
const { list } = require("./../models/usuarios");
/* GET users listing. */
router.get("/", async (req, res, next) => {
  const result = await list();
  console.log(result);
  res.render("usuarios", { usuarios: result });
});

// GET -> /url/params? (/usuarios | /usuarios/2)
// POST -> /url + OBJ
// DELETE /url/params -> (/usuarios/2)
// PUT /url/params + OBJ -> /usuario/2 + {estado : 0}
router.put("/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.json({ status: true });
});

module.exports = router;
