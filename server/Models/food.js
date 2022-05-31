const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	image: {
		type: string,
		required: true
    },
	price: {
		type: Number,
		required: true,
	},
	status: {
		type: Boolean,
		required: true,
	}
})

module.exports = mongoose.model('food', foodSchema);