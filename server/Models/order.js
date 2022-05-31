const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	customerID: {
		type: String,
		required: true
	},
	orderDate: {
		type: Date,
		required: true
	}
})

module.exports = mongoose.model('order', orderSchema);