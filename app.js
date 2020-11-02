const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use((req, res, next) => {
  res.status(404).send("Sorry we can't find that page.");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .send("Sorry we encountered and error. Please try again later.");
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
