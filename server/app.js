const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

//route files
const userRouter = require("./routes/userRoute");

//routes
app.use("/api/user", userRouter);

module.exports = app;
