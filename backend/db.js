// To create schema for Todo application
// MONGO DB
const mongoose = require("mongoose");

const conn = async function () {
  await mongoose.connect("mongodb://localhost:27017/TodoDb");
};
conn();
const dbSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

dbmodel = mongoose.model("dbmodel", dbSchema);

module.exports = dbmodel;
