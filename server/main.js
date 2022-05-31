const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const url = 'mongodb+srv://Admin:IAI123@tihefdb.bra2g.mongodb.net/?retryWrites=true&w=majority';

const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }))

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
    console.log('Connected to DataBase');
})


const PORT = 8080;


const userRoutes = require('./Routes/customers');
app.use('/customer', userRoutes);









app.listen(PORT, () => {
    console.log("API running on port : " + PORT);
})