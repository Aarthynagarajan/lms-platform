const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { enrollStudent, getMyEnrollments } = require("../controllers/enrollmentController");

// Student enrolls in course
router.post("/enroll", auth, enrollStudent);

// Student views enrolled courses
router.get("/mine", auth, getMyEnrollments);

module.exports = router;
