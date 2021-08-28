require("dotenv").config();

var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var cors = require("cors");

//================= MY ROUTES ==================================================
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");

//============== CONNECTING TO DATABASE ======================================

mongoose
  .connect(process.env.DATABASE, {
    // DATABASE = mongodb://localhost:27017/tshirt
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })

  .then(() => {
    console.log("DB CONNECTED");
  });

//======================== MIDDLEWARES ======================================

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//======================= ROUTES ===========================================

// here api-> will be used everytime whenever user wants to visit any of routes
// Example -> /api/signout

app.use("/api", authRoutes); // all signin, signup and signout routes are binded inside one -> authRoutes
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);

//====================== PORT AND SERVER =====================================

var port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
