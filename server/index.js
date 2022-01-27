const express = require("express");
const app = express();
const product = require("./model/product");
var mongoose = require("mongoose");
const PORT = 5000;
const dummyData = require('./data')

// console.log(dummyData);

//Set up default mongoose connection
var mongoDB = "mongodb://127.0.0.1/productDB";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });


app.get("/", (req, res) => {
  res.send("You are in homepage");
});

app.get("/products", async (req, res) => {
  data = await product.find();
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`server is listening at ${PORT}`);
});

// async function main() {
//   await product.create(dummyData);
// }
// main();
