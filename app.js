const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

sgMail
  .send({
    to: "vsaburdo@gmail.com",
    from: "rehebo2168@soombo.com",
    subject: "Hello from Node.js",
    text: "Hello world!",
    html: "<p><strong>Test email!</strong> from localhost: 3000</p>",
  })
  .then((res) => console.log(res))
  .catch((error) => console.log(error.message));

const authRouter = require("./routes/api/auth");
const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/users", authRouter);
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
