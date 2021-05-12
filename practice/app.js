const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

const userRouter = express.Router();
const productsRouter = express.Router();

const users = ["John", "Mark"];

const products = ["keyboard", "mouse"]
// app.get("/users", (req, res, next) => {
//   res.json(users);
// });

userRouter.post("/create", (req, res, next) => {
  users.push(req.body.name);
  res.json(users);
  if (req.body) {
    next();
  }
});

productsRouter.put("/update/:name",(req,res,next) => {
    console.log(77777777777777)
    const name = req.params.name;
    const newProduct = req.body.newProduct;
    const index = products.indexOf(name)
    products[index] = newProduct
    res.json(products)

})

const logBody = (req, res, next) => {
  console.log(req.body);
  //   next();
};
app.use(productsRouter)

app.use("/users", userRouter);
app.use("/products",productsRouter)

app.use(logBody);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
