const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  name: { type: String },
  skill: [{ type: Schema.Types.ObjectId, ref: "Skills" }]
});

module.exports = mongoose.model("User", userSchema);
