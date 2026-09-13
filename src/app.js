
const express = require("express");
const _ = require("lodash");

const app = express();

app.get("/", (req, res) => {
  const message = _.upperCase("hello gh500");
  res.send(message);
});

app.listen(3000, () => {
  console.log("GH500 lab running on port 3000");
});
