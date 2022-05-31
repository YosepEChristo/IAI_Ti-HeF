const express = require('express');


const router = express.Router();


const Food = require('../Models/food');


router.get('/tifDb/fooditem', async (req, res) => {
    try {
        const foodList = await Food.find({});
        res.send(foodList);
    } catch (e) {
        res.send("error :" + e);
    }
})


router.post('/add', async (req, res) => {
    try {
        const tempFood = req.body;

        if (await Food.findOne({ name: tempFood.name }) != null) {
            res.send("makanan sudah terdaftar");
        } else {

            const newFood = new Food({
                name: tempFood.name,
                image: tempFood.image,
                price: tempFood.price,
                status: tempFood.status
            })
            await newFood.save();
            res.send(newFood);
        }
    } catch (e) {
        res.send("error : " + e);
    }
})

router.patch('/update', async (req, res) => {
    try {
        const tempFood = req.body;
        const oldFood = await Food.findOne({ _id: tempFood._id });
        Object.assign(oldFood, tempFood);
        await oldFood.save();
        res.send(oldFood.name + " berhasil diupdate");
    } catch (e) {
        res.send("error : " + e);
    }
})


router.delete('/delete', async (req, res) => {
    try {
        const tempFoodID = req.body._id;
        await Food.deleteOne({ _id: tempFoodID });
        res.send(tempFoodID + " sudah dihapus");
    } catch (e) {
        res.send("error : " + e);
    }
})


module.exports = router;