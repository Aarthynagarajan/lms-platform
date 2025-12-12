const Assignment = require("../models/Assignment");

exports.createAssignment = async (req, res) => {
  try {
    const { courseId, title, instructions, dueDate } = req.body;

    const assignment = await Assignment.create({
      course: courseId,
      title,
      instructions,
      dueDate
    });

    res.json({ msg: "Assignment created", assignment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAssignments = async (req, res) => {
  try {
    const { courseId } = req.params;
    const assignments = await Assignment.find({ course: courseId });
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
