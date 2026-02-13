const express = require('express');
const app = express();
const PORT = 5000;
require('dotenv').config();

const rootRouter = require('./router/rootRouter');
const uploadRouter = require('./router/uploadRouter');

app.use(express.json());

app.set('view engine', 'ejs' );

app.use('/', rootRouter);
app.use('/upload', uploadRouter)

app.listen(PORT, () => {
    console.log(`${PORT} is running.`)
})