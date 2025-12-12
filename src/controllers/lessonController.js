const Lesson = require("../models/Lesson");
const Enrollment = require("../models/Enrollment");

exports.createLesson = async (req, res) => {
  try {
    const { courseId, title, content, videoUrl } = req.body;

    const lesson = await Lesson.create({
      course: courseId,
      title,
      content,
      videoUrl
    });

    res.json({ msg: "Lesson created", lesson });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Students can view only if enrolled
exports.getLessonsForCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    const isEnrolled = await Enrollment.findOne({
      student: req.user._id,
      course: courseId
    });

    if (!isEnrolled)
      return res.status(403).json({ msg: "Not enrolled in this course" });

    const lessons = await Lesson.find({ course: courseId });
    res.json(lessons);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
