const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	image: {
		type: String,
		required: true
    },
	price: {
		type: Number,
		required: true
	},
	status: {
		type: Boolean,
		required: true,
		default: true
	}
})

module.exports = mongoose.model('food', foodSchema);