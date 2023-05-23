const express = require("express");
const cors = require("cors");

const path = require("path")

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '/frontend/build')))

// Added this line in main
app.get("/dev", (req, res) => {
  res.send("Hello wold!");
});

//Hello FROM DEVELOPMENT

// GENERATING MERGE FAIL

app.listen(3001, () => {
  console.log("App is running on 3001");
});
