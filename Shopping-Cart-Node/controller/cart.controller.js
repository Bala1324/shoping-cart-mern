const express = require("express");
const router = express.Router();
const cartService = require("./cart.service.js"); 

// router
router.post("/orders",order)

module.exports = router;

// get the user detail
function order(req,res,next) {
	cartService.order(req.body, function(result){
		if(result){
			res.json({"status": "Success", "message": "Your order is completed", "data": result});
		}else{
			res.json({"status": "Failed", "message": "your order is failed"});
		}
	

	})
}

