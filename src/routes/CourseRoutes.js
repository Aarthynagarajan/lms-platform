const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const auth = require('../middleware/authMiddleware');

// Create course (instructor)
router.post('/', auth, async (req, res) => {
  try {
    if (req.user.role !== 'instructor') return res.status(403).json({ msg: 'Only instructors allowed' });
    const { title, description, tags } = req.body;
    const course = await Course.create({ title, description, tags, instructor: req.user._id });
    res.json({ msg: 'Course created', course });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// GET /api/courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().populate('instructor', 'name email');
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
