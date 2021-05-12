const express = require("express");

const app = express();
const port = 3000;

const users = ["John", "Mark"];



app.get("/users", (req, res, next) => {
  res.json(users);
  next()
});

const logUsers = (req, res, next) => {
  console.log(users);
  next();
};

app.use(logUsers);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
