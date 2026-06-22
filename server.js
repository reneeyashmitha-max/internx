require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const internshipRoutes = require("./routes/internshipRoutes");
const applicationRoutes = require("./routes/applicationsRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// 🔥 Database Connection
connectDB();

// 🔥 Middleware
app.use(cors());
app.use(express.json());

// 🔥 Routes
app.use("/api/auth", authRoutes);
app.use("/api/internships", internshipRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/user", userRoutes);

// 🔥 Test Route
app.get("/", (req, res) => {
  res.send("InternX Pro Backend Running 🚀");
});

// 🔥 Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});