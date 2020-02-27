const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "SMTP.office365.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'fa-pouza@hotmail.com', // generated ethereal user
      pass: 'CarolPouza010' // generated ethereal password
    }
  });

  module.exports = transporter;