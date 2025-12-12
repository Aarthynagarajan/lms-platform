require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use(require('./middleware/errorHandler'));
app.use("/api/upload", require("./routes/uploadRoutes"));

app.use("/api/submissions", require("./routes/submissionRoutes"));
app.use("/api/assignments", require("./routes/assignmentRoutes"));
app.use("/api/lessons", require("./routes/lessonRoutes"));
app.use("/api/enrollments", require("./routes/enrollmentRoutes"));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/courses', require('./routes/CourseRoutes'));
app.use('/api/test', require('./routes/testRoutes')); // optional simple route

app.get('/', (req, res) => res.send('Backend is running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
