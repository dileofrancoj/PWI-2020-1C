"use strict";
const nodemailer = require("nodemailer");
// estemailescompletamentefalso@gmail.com
// await transporter.verify();

// http://localhost/
async function main() {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP,
      port: process.env.PORT_MAIL,
      secure: false,
      auth: {
        user: process.env.USER_MAIL, // generated ethereal user
        pass: process.env.PASSWORD_MAIL, // generated ethereal password
      },
    });

    let info = await transporter.sendMail({
      to: "aquienselomando@correo.com.ar",
      subject: "Gracias por comprarnos 🎁", // Subject line
      html: "<b>Hello world?</b>", // html body
    });

    // Asocia a un numero de transaccion
    // '7c5288ba-7ece-46c0-ad20-9ebef277ca7e'
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  main,
};
