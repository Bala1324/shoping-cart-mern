const mongoose = require("mongoose");
const crypto = require("crypto");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
	orderid: {type: String, required: false, unique: true},
	items: {type: Array, required: false },
	isEmpty: {type: String, required: false },
	totalItems: {type: String, required: false },
	totalUniqueItems: {type: String, required: false},
	cartTotal: {type: String, required: false },
	metadata: {type: Object,required: false}


},{
	timestamps: true
});

orderSchema.pre("save", function(next){
	this.orderid = "order"+ crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
	next();
})


module.exports = mongoose.model('order', orderSchema);