const express = require('express');


const router = express.Router();


const Customer = require('../Models/customer');


router.get('/', async (req, res) => {
    try {
        const customerList = await Customer.find({});
        res.send(customerList);
    } catch(e) {
        res.send("error :"+e);
    }
})


router.post('/register', async(req,res) => {
    const tempEmail = req.body.email;
    const tempUsername = req.body.username;
    const tempPassword = req.body.password;

    if (await Customer.findOne({ email: tempEmail }) != null) {
        res.send("email sudah terdaftar");
    };

    if (await Customer.findOne({ username: tempUsername }) != null) {
        res.send("username sudah digunakan");
    };

    if (tempPassword == "") {
        res.send("password tidak sesuai");
    }

    const newCustomer = new Customer({
        email: tempEmail,
        username: tempUsername,
        password: tempPassword
    })
    try {
        await newCustomer.save();
        res.send(newCustomer);
    } catch (e) {
        res.send("error : " + e);
    }
})

router.post('/login', async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const oldCustomer = await Customer.findOne({ username });
        if (oldCustomer != null && oldCustomer.password == password) {
            res.send(oldCustomer);
        } else {
            res.send("login gagal");
        }
    } catch (e) {
        res.send("error : " + e);
    }
})


router.delete('/delete', async(req, res) => {
    try {
        const tempUsername = req.body.username;
        await Customer.deleteOne({ username: tempUsername });
        res.send(tempUsername + " sudah dihapus");
    } catch (e) {
        res.send("error : " + e);
    }
})


module.exports = router;