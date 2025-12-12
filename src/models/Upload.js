const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  originalName: { type: String },
  path: { type: String },
  fileType: { type: String },
  size: { type: Number },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Upload", uploadSchema);
