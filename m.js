const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: String,
  age: Number,
  points: Number,
  happiness: Number,
});

const Student = mongoose.model("student", studentSchema);

mongoose.connect("mongodb://localhost:27017/neuefische").then(() => {
  console.log("connected");
  Student.find({}).then((data) => {
    console.log(data);
    process.exit();
  });
});
