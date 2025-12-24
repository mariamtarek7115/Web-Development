const express = require("express");
const router = express.Router();
const coursesController = require("../controllers/coursesController");

// CRUD routes
router.post("/", coursesController.createCourse); 

router.get("/", coursesController.readCourse);
router.put("/:id", coursesController.updateCourse);    // Update by ID
router.delete("/:id", coursesController.deleteCourse);

module.exports = router;
