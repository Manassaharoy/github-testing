const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

// Added this line in main
app.get("/dev", (req, res) => {
  res.send("Hello wold!");
});

//Hello FROM DEVELOPMENT

// GENERATING MERGE FAIL

app.listen(3001, () => {
  console.log("App is running on 3001");
});
