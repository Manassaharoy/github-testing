const express = require("express");
const app = express();

app.get("/dev", (req, res) => {
  res.send("Hello wold!");
});

app.listen(3001, () => {
  console.log("App is running on 3001");
});
