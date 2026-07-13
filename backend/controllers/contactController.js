const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

const createContact = async (req, res) => {

  try {

    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !message) {

      return res.status(400).json({
        success: false,
        message: "Please fill all required fields"
      });

    }

    const newContact = await Contact.create({

      name,
      email,
      phone,
      service,
      message

    });

    await sendEmail({

      to: process.env.ADMIN_EMAIL,

      subject: "🚀 New Contact Form Submission",

      html: `
        <h2>New Inquiry Received</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    sendEmail({

      to: email,

      subject: "Thank You for Contacting ApnaGraphix",

      html: `
        <h2>Thank You, ${name} 🙌</h2>

        <p>We received your message successfully.</p>

        <p>Our team will contact you shortly.</p>

        <br/>

        <p>— Team ApnaGraphix</p>
      `
    });

    res.status(201).json({

      success: true,
      message: "Contact submitted successfully",
      data: newContact

    });

  } catch (error) {

    console.log("FULL ERROR:");
    console.log(error);

    res.status(500).json({

      success: false,
      message: "Server Error"

    });

  }

};

const getAllContacts = async (req, res) => {

  try {

    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({

      success: true,
      count: contacts.length,
      data: contacts

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message

    });

  }

};

module.exports = {

  createContact,
  getAllContacts

};
