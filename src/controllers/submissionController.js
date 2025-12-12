const Submission = require("../models/Submission");

exports.submitAssignment = async (req, res) => {
  try {
    const { assignmentId } = req.body;

    const submission = await Submission.create({
      assignment: assignmentId,
      student: req.user._id,
      fileUrl: req.file.path
    });

    res.json({ msg: "Submitted successfully", submission });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
