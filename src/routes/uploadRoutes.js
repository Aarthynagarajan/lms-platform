const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { getPresignedUrl } = require("../controllers/uploadController");

// Protected route → user must be logged in
router.get("/presigned-url", auth, getPresignedUrl);

module.exports = router;
