const express = require("express");
const app = express();
// Added this line in development
app.get("/dev", (req, res) => {
  res.send("Hello wold!");
});

//Hello

app.listen(3001, () => {
  console.log("App is running on 3001");
});
