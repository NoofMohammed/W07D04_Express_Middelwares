const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

const authRouter = express.Router();

const users = ["John", "Mark"];

// const users = [];

const logUsers = (req, res, next) => {
  console.log(users);
  next();
};

authRouter.use(logUsers);

const logMethod = (req, res, next) => {
  console.log(req.get);
  next();
};
authRouter.use(logMethod);
app.use(authRouter);

authRouter.get("/users", (req, res, next) => {
  if (users.length > 0) {
    res.json(users);
  } else {
    next();
  }
});

const error = (req, res, next) => {
  res.json("No users");
};
app.use(error);

app.use(authRouter);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
