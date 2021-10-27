const mongoose = require("mongoose");
const crypto = require("crypto");

const Schema = mongoose.Schema;

const productSchema = new Schema({
            productid: {type: String, required: false, unique: true},
            img:{type:String, required: true},
            title:{type:String, required: true},
            desc:{type:String, required: true},
            price:{type:String, required: true}
        
},{
	timestamps: true
});

productSchema.pre("save", function(next){
	this.productid = "product"+ crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
	next();
})


module.exports = mongoose.model('product', productSchema);