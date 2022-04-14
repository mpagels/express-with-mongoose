const express = require("express");
const mongoose = require("mongoose");

const Student = require("./models/student.js");

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/neuefische");

app.use(express.json());

app.get("/", (req, res) => {
  Student.find({}).then((data) => {
    res.send(data);
  });
});

app.get("/:currywurst", (req, res, next) => {
  const id = req.params.currywurst;
  Student.findById(id)
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      next();
    });
});

app.post("/", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const points = req.body.points;
  const happiness = req.body.happiness;

  const newStudent = Student({ name: name, age: age, points, happiness });
  newStudent
    .save()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
});

app.delete("/:currywurst", (req, res, next) => {
  const id = req.params.currywurst;
  Student.findByIdAndDelete(id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(() => {
      next();
    });
});

app.patch("/:currywurst", (req, res, next) => {
  const id = req.params.currywurst;
  const updatedObject = req.body;
  Student.findByIdAndUpdate(id, { ...updatedObject }, { new: true })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(() => {
      next();
    });
});

app.use((req, res, next) => {
  res.status(400).send("ERROR JUNGE");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
