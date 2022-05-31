const express = require('express');


const router = express.Router();


const Customer = require('../Models/customer');


router.get('/tifDb/customer', async (req, res) => {
    try {
        const customerList = await Customer.find({});
        res.send(customerList);
    } catch(e) {
        res.send("error :"+e);
    }
})


<<<<<<< HEAD
router.post('/register', async (req, res) => {
=======
router.post('/tifDb/customer', async(req,res) => {
    const tempUser = req.body

    if (await Customer.findOne({ email: tempUser.email }) != null) {
        res.send("email sudah terdaftar");
    };

    if (await Customer.findOne({ username: tempUser.username }) != null) {
        res.send("username sudah digunakan");
    };

    if (tempUser.password == "") {
        res.send("password tidak sesuai");
    }

    const newCustomer = new Customer({
        email: tempUser.email,
        username: tempUser.username,
        password: tempUser.password
    })
>>>>>>> 6a507d728eb39f75e1a9831d002ffb51d8653d58
    try {
        const tempUser = req.body

        if (await Customer.findOne({ email: tempUser.email }) != null) {
            res.send("email sudah terdaftar");
        } else if
            (await Customer.findOne({ username: tempUser.username }) != null) {
            res.send("username sudah digunakan");
        } else if
            (tempUser.password == "") {
            res.send("password tidak sesuai");
        } else {
            const newCustomer = new Customer({
                email: tempUser.email,
                username: tempUser.username,
                password: tempUser.password
            })
            await newCustomer.save();
            res.send(newCustomer);
        }
    } catch (e) {
        res.send("error : " + e);
    }
})

router.post('/tifDb/customer', async (req, res) => {
    try {
        const tempUser = req.body;
        const oldCustomer = await Customer.findOne({ username: tempUser.username });
        if (oldCustomer != null && oldCustomer.password == tempUser.password) {
            res.send(oldCustomer);
        } else {
            res.send("login gagal");
        }
    } catch (e) {
        res.send("error : " + e);
    }
})


router.delete('/tifDb/customer', async(req, res) => {
    try {
        const tempUser = req.body;
        await Customer.deleteOne({ _id: tempUser._id });
        res.send(tempUser.username + " sudah dihapus");
    } catch (e) {
        res.send("error : " + e);
    }
})


module.exports = router;