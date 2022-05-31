const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
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





const userRoutes = require('./Routes/customers');
const foodRoutes = require('./Routes/foods');
const orderRoutes = require('./Routes/orders');

app.use('/customer', userRoutes);
app.use('/food', foodRoutes);
app.use('/order', orderRoutes);



app.listen(process.env.PORT || 8080, () =>{
    console.log("API succesfull connect to db")
});