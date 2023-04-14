const { Schema, model } = require("mongoose");

const contactSchma = new Schema({
  name: String,
  email: String,
  phone: String,
});

const Contact = model("contact", contactSchma);

module.exports = Contact;
