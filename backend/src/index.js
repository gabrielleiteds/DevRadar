//imports
const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');

const app = express();

//config routes
app.use(express.json());
app.use(routes); 

//conexão com o banco Mongo
mongoose.connect('mongodb+srv://gabrielprog:9l19g17g@cluster0-0vkw3.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); 

app.listen(8000); 