const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  snippet: String,
  body: String
});

module.exports = mongoose.model("Blog", blogSchema);