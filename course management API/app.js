const express = require("express");
const mongoose = require("mongoose");
const coursesRoute = require("./routes/coursesRoute");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/courseDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/courses", coursesRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
