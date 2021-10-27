const moment = require("moment");
const database = require('../helper/db.js');

const admin = database.admin;
const productdb = database.product;
const Order = database.order;

const nodemailer = require("nodemailer");
const product = require("../model/product.js");

const mailTransport = nodemailer.createTransport({
	"service" : "gmail",
	"auth": {
		user : "baladummyemail@gmail.com",
		pass: ""
	}
});


module.exports = {
addProduct,
getProduct,
updateProduct,
deleteProduct,
getOrders,
approveOrder,
cancelOrder
}

//add product
async function addProduct(req,callback){
	let product = new productdb(req);
	await product.save().then((data)=>{
		callback(data);
	})
}


//get product
async function getProduct(req,callback) {
	await product.find().exec().then((data)=>{
		callback(data);
	})
}

// update the food details
async function updateProduct(req,callback) {
	let condition = req.productid;
	let update = req.updateObj;
	console.log(update)
	let option = {new : true}
	await product.findOneAndUpdate({uuid: condition}, update, option).exec().then((data)=>{
		callback(data);
	})

}

//delete a food detail
async function deleteProduct(req,callback){
	let productid = req.productid;
	await product.findOneAndRemove(productid).exec().then((data)=>{
		callback(data);
	})
};

// admin aprove a order
async function approveOrder(req,res) {
	let orderid = req.body.orderid;
	console.log(orderid)
	let update = {
		"approve_status": "true"
	};
	let option = {new : true}
	
	let result = await order.findOneAndUpdate({"orderid" :orderid}, update, option).exec();
	let mailData = {
		from: "baladummyemail@gmail.com",
		to: result.user_detail.user_email,
		subject: "Order Aproved",
		text: "Your order is Approved by Admin.."+"\n OrderId: "+orderid
	}
	console.log(result)
    if(result){
		sendMail(details);
		res.json({"status": "Success", "message": "order approved","data":result});
	}else{
		res.json({"status": "Success", "message": "order not approved"});
	}
		

}
	
//admin cancel a order
async function  cancelOrder(req,res){

	let orderid = req.body.orderid;
	const order_detail = await order.find({"uuid": uuid}).exec();
	console.log(order_detail[0].user_detail.user_email);
	let mailData = {
		from: "baladummyemail@gmail.com",
		to: order_detail[0].user_detail.user_email,
		subject: "Order Canceled",
		text: "Your order is Canceled by Admin.."
	}
	if(!order_detail){
		res.json({"status": "Failed", "message": "order does not exist"});
	}else{
	
			 let remove = await order.findOneAndRemove(uuid)
			 if(remove){
				sendMail(details);
				res.json({"status": "Success", "message": "sucessss","data": remove});
			 }else{
				res.json({"status": "Failed", "message": "failed"});
			 }
	}
	
}

//get the food details
async function getOrders(req,res) {
	let order = await order.find().exec()
	if(order){
		res.json({"status": "Success", "message": "Success","data":result});
	}else{
		res.json({"status": "Failed", "message": "Failed"});
	}
		
}

// mail function
function sendMail(details){
		
	let mailData;
	mailData = {
		from: details.from,
		to: details.to,
		subject: details.subject,
		text: details.text
	}
	mailTransport.sendMail(mailData, function(err,data){
		if(err){
			console.log(err)
		}else{
			console.log("Email sent");
		}
	})
}

