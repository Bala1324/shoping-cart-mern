const moment = require("moment");
const database = require('../helper/db.js');
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
// const user = database.users;
// const admin = database.admin;
const orders = database.order;
const bcrypt = require("bcrypt");
const mailTransport = nodemailer.createTransport({
	"service" : "gmail",
	"auth": {
		user : "baladummyemail@gmail.com",
		pass : "balabala1324"
	}
});

module.exports = {
	   order
}

//Order
async function order(req,callback){
	
	// const obj = JSON.parse(JSON.stringify(req));

	// console.log("req",obj)
	let cartOrder = new orders(req);
	
	await cartOrder.save().then((data)=>{
		callback(data);
	})
}


	//mail function
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