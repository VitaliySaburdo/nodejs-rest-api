const { HttpError } = require("../helpers");

const validateCreateBody = (schema) => {
  const func = (req, res, next) => {
    // const requiredFiels = ["name", "email", "phone"];
    // const missingFields = requiredFiels.filter((field) => !req.body[field]);
    // console.log(missingFields);
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, "required field"));
    }
    next();
  };
  return func;
};

module.exports = validateCreateBody;
