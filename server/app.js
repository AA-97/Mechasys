const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieParser());

//route files
const homeRouter = require('./routes/homeRoute');

//routes
app.use('/api', homeRouter);


module.exports = app;
