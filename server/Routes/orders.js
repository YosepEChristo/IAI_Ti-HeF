const express = require('express');
const router = express.Router();
const Order = require('../Models/order');
const Customer = require('../Models/customer');

router.get('/', async (req, res) => {
    try {
        const orderList = await Order.find({})
        res.send(orderList);
    } catch(e) {
        res.send("Error " + e);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const oldOrder = await Order.findById({ _id: req.params.id })
        res.send(oldOrder);
    } catch (e) {
        res.send("Error " + e);
    }
})

router.post('/', async (req, res) => {
    try {
        const tempOrder = req.body;
        if (await Customer.findById({ _id: tempOrder.customerID }) != null) {
            const newOrder = new Order({
                customerID: tempOrder.customerID,
                orderDate: tempOrder.orderDate,
                foodList: tempOrder.foodList,
                totalPrice: tempOrder.totalPrice,
                delivered: tempOrder.delivered
            })
            await newOrder.save();
            res.send(newOrder);
        } else {
            res.send("User tidak terdaftar");
        }
    } catch (e) {
        res.send("Error " + e);
    }
})

router.patch('/', async (req, res) => {
    try {
        const tempOrder = req.body;
        const oldOrder = await Order.findById({ _id: tempOrder._id });
        if (oldOrder != null) {
            Object.assign(oldOrder, tempOrder);
            await oldOrder.save();
            res.send(oldOrder);
        } else {
            res.send("Order tidak ditemukan");
        }
    } catch (e) {
        res.send('error ' + e);
    }
})

router.delete('/', async (req, res) => {
    try {
        const tempOrderID = req.body._id;
        await Order.deleteOne({ _id: tempOrderID });
        res.send(tempOrderID + " sudah dihapus");
    } catch (e) {
        res.send("error : " + e);
    }
})

module.exports = router;