require("dotenv").config();

const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({

  host: "smtp.gmail.com",

  port: 587,

  secure: false, // IMPORTANT: false for port 587

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },

  tls: {
    rejectUnauthorized: false
  }

});


// Test SMTP connection when server starts
transporter.verify((error, success) => {

  if (error) {

    console.log("SMTP CONNECTION ERROR");
    console.log(error);

  } else {

    console.log("SMTP SERVER READY");

  }

});


const sendEmail = async ({ to, subject, html }) => {

  try {

    const mail = await transporter.sendMail({

      from: `"ApnaGraphix" <${process.env.EMAIL_USER}>`,

      to: to,

      subject: subject,

      html: html

    });


    console.log("EMAIL SENT SUCCESSFULLY");
    console.log(mail.response);


    return true;


  } catch (error) {

    console.log("EMAIL SEND ERROR");
    console.log(error);


    return false;

  }

};


module.exports = sendEmail;
