const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

//route files
const userRouter = require("./routes/userRoute");

//routes
app.use("/api/user", userRouter);

module.exports = app;
