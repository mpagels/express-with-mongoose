const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  points: { type: Number, default: 0 },
  happiness: { type: Number, default: 0 },
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

  /*   Student.findById("625753923730a4b24b5ce9e")
    .then((data) => {
      console.log(data);
      process.exit();
    })
    .catch((error) => {
      console.log("ERROR");
    }); */

  // create a student and save in database

  const newStudent = Student({ name: "TestPerson3", age: 15 });

  newStudent.save().then((data) => {
    console.log(data);
    process.exit();
  });

  // delete a student

  /*   Student.findByIdAndDelete("6257d8a614334ba0ed7fbda5").then((data) => {
    console.log(data);
    process.exit();
  }); */
});
