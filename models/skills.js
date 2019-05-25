const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillsSchema = new Schema({
  skill: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Skills", skillsSchema);
