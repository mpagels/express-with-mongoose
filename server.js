const express = require("express");
const mongoose = require("mongoose");

const Student = require("./models/student.js");

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/neuefische");

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
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
