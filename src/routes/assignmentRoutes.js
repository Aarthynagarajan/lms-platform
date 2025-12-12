const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { createAssignment, getAssignments } = require("../controllers/assignmentController");

// Instructor creates assignments
router.post("/", auth, createAssignment);

// Students view assignments
router.get("/:courseId", auth, getAssignments);

module.exports = router;
