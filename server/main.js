const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const PORT = 8080;


const userRoutes = require('./Routes/customers');
app.use('/customer', userRoutes);









app.listen(PORT, () => {
    console.log("API running on port : " + PORT);
})