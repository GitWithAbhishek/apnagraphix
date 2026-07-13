require("dotenv").config();

const nodemailer = require("nodemailer");
const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");


const transporter = nodemailer.createTransport({

  host: "smtp.gmail.com",

  port: 465,

  secure: true,

  family: 4,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },

  connectionTimeout: 30000,
  socketTimeout: 30000

});


const sendEmail = async ({to, subject, html}) => {

  try {

    const info = await transporter.sendMail({

      from: `"ApnaGraphix" <${process.env.EMAIL_USER}>`,

      to,

      subject,

      html

    });


    console.log("EMAIL SENT SUCCESSFULLY");

    console.log({
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response
    });


    return true;


  } catch(error) {

    console.log("EMAIL ERROR");
    console.log(error);

    return false;

  }

};


module.exports = sendEmail;
