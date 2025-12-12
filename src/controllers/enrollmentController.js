const Enrollment = require("../models/Enrollment");
const Course = require("../models/Course");

exports.enrollStudent = async (req, res) => {
  try {
    const { courseId } = req.body;

    const exists = await Enrollment.findOne({ 
      student: req.user._id, 
      course: courseId 
    });

    if (exists) return res.status(400).json({ msg: "Already enrolled" });

    const enrollment = await Enrollment.create({
      student: req.user._id,
      course: courseId
    });

    res.json({ msg: "Enrolled successfully", enrollment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMyEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ student: req.user._id })
      .populate("course");

    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
