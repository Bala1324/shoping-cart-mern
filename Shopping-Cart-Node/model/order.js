const mongoose = require("mongoose");
const crypto = require("crypto");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
	orderid: {type: String, required: false, unique: true},
	email: {type: String, required: true },
	name: {type: String, required: true },
	password: {type: String, required: true },
	new_password: {type: String, required: false},
	loginstatus: {type: String, required: false }


},{
	timestamps: true
});

orderSchema.pre("save", function(next){
	this.uuid = "order"+ crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
	next();
})


module.exports = mongoose.model('order', orderSchema);