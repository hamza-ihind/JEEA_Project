const { model, Schema } = require("mongoose");

const projectSchema = new Schema({
  title: String,
  location: String,
  date: String,
  description: String,
  body: String,
});

module.exports = model("Project", projectSchema);
