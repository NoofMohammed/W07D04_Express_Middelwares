const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

const authRouter = express.Router();

const users = ["John", "Mark"];

// app.get("/users", (req, res, next) => {
//   res.json(users);
// });

authRouter.post("/create", (req, res, next) => {
  users.push(req.body.name);
  res.json(users);
  if (req.body) {
    next();
  }
});
const logBody = (req, res, next) => {
  console.log(req.body);
  //   next();
};

app.use("/users", authRouter);
app.use(logBody);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
