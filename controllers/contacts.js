const Contact = require("../models/contact");

// const { HttpError, ctrlWrapper } = require("../helpers");
const { ctrlWrapper } = require("../helpers");

const getAllContacts = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

// const getContactsById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.getContactById(contactId);
//   if (!result) {
//     throw HttpError(404, `Product with id ${contactId} not found`);
//   }
//   res.json(result);
// };

// const createContact = async (req, res) => {
//   const result = await contacts.addContact(req.body);
//   res.status(201).json(result);
// };

// const deleteContact = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.removeContact(contactId);
//   if (!result) {
//     throw HttpError(404, "Not Found");
//   }
//   res.status(200).json({ message: "contact deleted" });
// };

// const changeContactById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.updateContact(contactId, req.body);
//   if (!result) {
//     throw HttpError(404, `Product with id ${contactId} not found`);
//   }
//   res.status(200).json(result);
// };

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  // getContactsById: ctrlWrapper(getContactsById),
  // createContact: ctrlWrapper(createContact),
  // deleteContact: ctrlWrapper(deleteContact),
  // changeContactById: ctrlWrapper(changeContactById),
};
