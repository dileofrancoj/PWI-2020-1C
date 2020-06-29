"use strict";
const nodemailer = require("nodemailer");
// estemailescompletamentefalso@gmail.com
// await transporter.verify();

// http://localhost/
async function main(obj) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP,
      port: process.env.PORT_MAIL,
      secure: false,
      auth: {
        user: process.env.USER_MAIL,
        pass: process.env.PASSWORD_MAIL,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let info = await transporter.sendMail({
      to: obj.to,
      subject: obj.subject, // Subject line
      html: obj.html,
    });

    // Asocia a un numero de transaccion
    // '7c5288ba-7ece-46c0-ad20-9ebef277ca7e'
    // console.log("Message sent: %s", info.messageId);
    return info.messageId;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  main,
};
