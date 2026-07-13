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

  greetingTimeout: 30000,

  socketTimeout: 30000

});


transporter.verify((error) => {

  if (error) {

    console.log("SMTP VERIFY ERROR");
    console.log(error);

  } else {

    console.log("GMAIL SMTP READY");

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

    console.log({
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response
    });


    return true;


  } catch(error) {

    console.log("EMAIL SEND ERROR");
    console.log(error);

    return false;

  }

};


module.exports = sendEmail;
