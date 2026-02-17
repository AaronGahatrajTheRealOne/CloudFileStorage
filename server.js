const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose')
require('dotenv').config();

const rootRouter = require('./router/rootRouter');
const uploadRouter = require('./router/uploadRouter');

app.use(express.json());

app.set('view engine', 'ejs' );

mongoose.connect(process.env.mongodb_link).then(
    console.log("Connected to Mongoose")
).catch(err => console.log(err.message))

app.use('/', rootRouter);
app.use('/upload', uploadRouter)

app.listen(PORT, () => {
    console.log(`${PORT} is running.`)
})