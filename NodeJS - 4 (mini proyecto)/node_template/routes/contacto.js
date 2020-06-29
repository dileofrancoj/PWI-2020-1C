const express = require("express");
const router = express.Router();
const { main } = require("./../utils/mail");
router.get("/", (req, res) => {
  res.render("contacto");
});

router.post("/", async (req, res) => {
  // informacion del formulario
  const { email, mensaje } = req.body;

  const to = process.env.ADMIN_MAIL;
  const subject = "Nuevo mensaje desde el sitio web";
  const html = `Se contactaron desde ${email} con la siguiente consulta : ${mensaje}`;

  const finalObject = {
    to,
    subject,
    html,
  };
  console.log(finalObject);
  const resultMail = await main({ to, subject, html });
  console.log(resultMail);
  res.render("contacto", {
    message: "Mensaje enviado, en breve nos contactaremos",
  });
  // transaction id
});

module.exports = router;
