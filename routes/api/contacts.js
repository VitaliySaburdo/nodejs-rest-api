const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const {
  validateBody,
  validateCreateBody,
  isValidId,
  validatePatchBody,
} = require("../../middlewares");

const schemas = require("../../schemas/contacts");

router.get("/", ctrl.getAllContacts);

router.get("/:id", isValidId, ctrl.getContactsById);

router.post("/", validateCreateBody(schemas.addShema), ctrl.createContact);

router.delete("/:id", isValidId, ctrl.deleteContact);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.changeShema),
  ctrl.changeContactById
);

router.patch(
  "/:id/favorite",
  isValidId,
  validatePatchBody(schemas.upDateFavoriteSchema),
  ctrl.upDateFavorite
);

module.exports = router;

// NsIjAOnMmoCVEP0T
