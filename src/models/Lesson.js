const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  title: { type: String, required: true },
  content: { type: String },
  videoUrl: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Lesson", lessonSchema);
