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

  /*  Student.findById("625753923730a4b24b5ce9eb").then((data) => {
    console.log(data);
    process.exit();
  }); */

  // create a student and save in database

  /*   const newStudent = Student({
    name: "Alex",
    age: 18,
    points: 0,
    happiness: 8,
  });

  newStudent.save().then((data) => {
    console.log(data);
    process.exit();
  }); */

  // delete a student

  Student.findByIdAndDelete("6257d8a614334ba0ed7fbda5").then((data) => {
    console.log(data);
    process.exit();
  });
});
