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

  // get all students back
  /*   Student.find({}).then((data) => {
    console.log(data);
    process.exit();
  }); */

  // get a student by id

  Student.findById("625753923730a4b24b5ce9eb").then((data) => {
    console.log(data);
    process.exit();
  });
});
