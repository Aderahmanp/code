const express = require("express");
const userRoutes = require("./routes/user");
const mongoose = require("mongoose");
const cors = require("cors");

try {
  dotEnv = require("dotenv").config();
} catch (err) {
  console.log(err.message);
}

// Initial PORT

const PORT = process.env.PORT || 1234;
const mongoUrl = process.env.MONGGO_DB_URL;

// Connecting Mongoose
mongoose.set("userCreateIndex", true);
mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => {
    console.log(`Mongoose connected at ${mongoUrl}`);
  })
  .catch(err => {
    throw new Error(err);
  });

// Running Express Application
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// initialzation of plug'in Middleware, Routes
app.use("/user", userRoutes);

// Listen server
app.listen(PORT, () => {
  console.log(`Servet is now listening on port ${PORT}`);
});

module.exports = app;
