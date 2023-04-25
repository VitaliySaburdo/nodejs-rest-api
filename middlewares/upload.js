const multer = require("multer");
const path = require("path");
// const fs = require("fs");

const tempDir = path.join(__dirname, "../", "temp");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multerConfig,
});

// const multerConfig = multer.diskStorage({ destination: tempDir });

module.exports = upload;
