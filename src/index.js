const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("GitOps Demo - Rerun Successful!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
