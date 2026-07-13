require("dotenv").config();

const nodemailer = require("nodemailer");
const dns = require("dns");


// Force IPv4
dns.setDefaultResultOrder("ipv4first");


const transporter = nodemailer.createTransport({

  host: "smtp.gmail.com",

  port: 587,

  secure: false,

  family: 4,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },

  connectionTimeout: 10000,

  greetingTimeout: 10000,

  socketTimeout: 10000

});


transporter.verify((error) => {

  if (error) {

    console.log("SMTP ERROR");
    console.log(error);

  } else {

    console.log("SMTP READY");

  }

});


const sendEmail = async ({ to, subject, html }) => {

  try {

    await transporter.sendMail({

      from: `"ApnaGraphix" <${process.env.EMAIL_USER}>`,

      to,

      subject,

      html

    });


    console.log("EMAIL SENT");

    return true;


  } catch (error) {

    console.log("EMAIL SEND ERROR");
    console.log(error);

    return false;

  }

};


module.exports = sendEmail;
