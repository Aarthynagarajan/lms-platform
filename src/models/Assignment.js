const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  title: { type: String, required: true },
  instructions: String,
  dueDate: Date
});

module.exports = mongoose.model("Assignment", assignmentSchema);
