var express = require("express");
var router = express.Router();
const sha1 = require("sha1");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Dar de alta una categoria
router.post("/", async (req, res) => {
  console.log("Hi async");
  console.log(req.body);
  // dar de alta la categoria
  // model -> objeto
  // enviar un res.json a la vista
  res.json({ success: false });
});
module.exports = router;
