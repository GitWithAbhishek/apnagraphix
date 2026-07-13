require("dotenv").config();

const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({

  host: "smtp.gmail.com",

  port: 587,

  secure: false,

  requireTLS: true,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }

});


const sendEmail = async ({ to, subject, html }) => {

  try {

    const info = await transporter.sendMail({

      from: `"ApnaGraphix" <${process.env.EMAIL_USER}>`,

      to,

      subject,

      html

    });


    console.log("EMAIL SENT SUCCESSFULLY");
    console.log(info.messageId);


  } catch (error) {

    console.log("EMAIL ERROR");
    console.log(error);

    throw error;   // important

  }

};


module.exports = sendEmail;
