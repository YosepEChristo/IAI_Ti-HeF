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

     await Customer.countDocuments({ email: tempEmail }, (err, count)=> {
        if (count != 0 || tempEmail == "") {
            console.log("Email tidak sesuai");
        }
     });

    await Customer.countDocuments({ username: tempUsername }, (err, count) => {
        if (count != 0 || tempUsername == "") {
            console.log("username tidak sesuai");
        }
    });

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
        if (oldCustomer.password == password) {
            res.send(oldCustomer);
        }
        res.send("login gagal");
    } catch (e) {
        res.send("error : " + e);
    }
})


router.delete('/delete', async(req, res) => {
    try {
        const tempUsername = req.body.username;
        await Customer.deleteOne({ username: tempUsername });
        res.send(tempUsername + "sudah dihapus");
    } catch (e) {
        res.send("error : " + e);
    }
})


module.exports = router;