const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { validateBody, validateCreateBody } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", ctrl.getContactsById);

router.post("/", validateCreateBody(schemas.addShema), ctrl.createContact);

router.delete("/:contactId", ctrl.deleteContact);

router.put(
  "/:contactId",
  validateBody(schemas.changeShema),
  ctrl.changeContactById
);

module.exports = router;
