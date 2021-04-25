const express = require("express");
const cors = require("cors");
const path = require('path');
const quiz = require("./routes/quiz");
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.use("/quiz", quiz);





module.exports = app;
