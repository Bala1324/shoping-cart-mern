const express = require("express");
const router = express.Router();
const adminService = require("./admin.service.js");

//routers
router.post('/addProduct', addProduct);
router.get("/getProduct", getProduct);
router.put("/updateProduct", updateProduct);
router.delete("/deleteProduct", deleteProduct);
router.get("/getOrders", getOrders);
router.put("/approveOrder", approveOrder);
router.delete("/cancelOrder", cancelOrder);

module.exports = router;

// add the food 
function addProduct(req,res,next) {
	adminService.addProduct(req.body, function(result){
		res.json({"status": "Success", "message": "Product added", "data": result})
	})
};

//get products
function getProduct(req,res,next) {
	adminService.getProduct(req.body, function(result){
		res.json({"status": "Success", "message": "Product fetched", "data": result})
	})
};


// update product
function updateProduct(req,res, next) {
	adminService.updateProduct(req.body, function(result){
		if(result){
			res.json({"status": "Success", "message": "product details updated", "data": result})

		}else{
			res.json({"status": "Failed", "message": "update process failed"})

		}
	})
}

//Delete product
function deleteProduct(req,res, next) {
	adminService.deleteProduct(req.body, function(result){
		if(result){
			res.json({"status": "Success", "message": "Product deleted","data":result});

		}else{
			res.json({"status": "Failed", "message": "Delete process failed"});

		}
	})
}

// get orders
function getOrders(req,res,next) {
	adminService.getOrders(req.body, function(result){
		res.json({"status": "Success", "message": "Orders fetched", "data": result});
	})
}

// approve Order
function approveOrder(req,res,next) {
	adminService.getOrders(req.body, function(result){
		res.json({"status": "Success", "message": "Order aprover", "data": result});
	})
}

// cancel order
function cancelOrder(req,res,next) {
	adminService.getOrders(req.body, function(result){
		res.json({"status": "Success", "message": "Order calceled", "data": result});
	})
}
