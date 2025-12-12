const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { createLesson, getLessonsForCourse } = require("../controllers/lessonController");

// Instructor creates lessons
router.post("/", auth, createLesson);

// Students view lessons
router.get("/:courseId", auth, getLessonsForCourse);

module.exports = router;
