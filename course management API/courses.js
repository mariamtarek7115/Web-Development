const mongoose = require("mongoose");

// Schema
const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructorName: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  enrolledStudents: { type: Number, default: 0 }
});

// Export model
module.exports = mongoose.model("Course", courseSchema);
