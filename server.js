const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const app = express();
require("./config/database");

//Global Middlewares
app.use(morgan("dev"));
app.use(express.json());
dotenv.config({ path: "./config/.env" });

//Importing Routes
const authRoute = require("./routes/authRoute/route");
const contactRoute = require("./routes/contactRoute/contactRoute");

//Implement Routes
app.use("/api/v1", authRoute);
app.use("/api/v1", contactRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    msg: "welcome to home page",
  });
});

app.listen(3000, () => {
  console.log("Listening At 3000");
});
