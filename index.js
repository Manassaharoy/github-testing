const express = require("express");
const cors = require("cors");

const path = require("path");

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "/frontend/build")));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// Added this line in main
app.get("/dev", (req, res) => {
  res.send("Hello wold!");
});

app.post("/test", (req, res) => {
  console.log(req.body.data);
  res.send(req.body.data);
});
//Hello FROM DEVELOPMENT

// GENERATING MERGE FAIL

app.listen(3001, () => {
  console.log("App is running on 3001");
});
