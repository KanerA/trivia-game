const express = require("express");
const cors = require("cors");
const path = require('path');
// const api = require("./routes");
const app = express();
const { Op } = require('sequelize');
const { country } = require('./models');
const { getQuestion } = require('./utils');

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// })

// app.use("/api", api);

app.get('/', getQuestion);



module.exports = app;
