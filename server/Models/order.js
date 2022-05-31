const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	customerID: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true
	},
	orderDate: {
		type: Date,
		required: true
	},
	foodList: [{
		type: mongoose.SchemaTypes.ObjectId,
		required: true
	}],
	totalPrice: {
		type: Number,
		required: true
	},
	delivered: {
		type: Boolean,
		required: true,
		default: false
    }
})

module.exports = mongoose.model('order', orderSchema);