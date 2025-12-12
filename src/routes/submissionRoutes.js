const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");
const { submitAssignment } = require("../controllers/submissionController");

router.post("/", auth, upload.single("file"), submitAssignment);

module.exports = router;
