const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
	orderID: {
		type: String,
		required: true
	},
	foodID: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
		required: true
	},
	price: {
		type: Number,
		required: true
    }
})

module.exports = mongoose.model('orderItem', orderItemSchema);