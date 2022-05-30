const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const url = 'mongodb+srv://Admin:IAI123@tihefdb.bra2g.mongodb.net/?retryWrites=true&w=majority';

const app = express();
app.use(express.json());


const PORT = 8000;


const userRoutes = require('./Routes/customers');
app.use('/customer', userRoutes);









app.listen(PORT, () => {
    console.log("API running on port : " + PORT);
})