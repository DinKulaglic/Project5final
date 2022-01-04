const express = require("express");

const app = express();

const PORT = 5000;

app.use(express.static("."));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
