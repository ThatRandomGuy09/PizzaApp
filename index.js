const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json);
app.use(cors());

// connecting mongodb

mongoose
  .connect("mongodb://127.0.0.1:27017/FirstDB")
  .then(() => console.log("Mongo Connected"))
  .catch(() => console.log("Not connected"));

  //schemas
//product schema

const ProductSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        maxlength: 60,
      },
      desc: {
        type: String,
        required: true,
        maxlength: 200,
      },
      img: {
        type: String,
        required: true,
      },
      prices: {
        type: [Number],
        required: true,
      },
      extraOptions: {
        type: [
          {
            text: { type: String, required: true },
            price: { type: Number, required: true },
          },
        ],
      },
    },
    { timestamps: true }
  );

  const Product = mongoose.model("Product", ProductSchema);


// routes
app.get("/", function (req, res) {
  res.send("Server is up and running");
});

app.listen(3001, function () {
  console.log("Server is running on port 3000");
});
