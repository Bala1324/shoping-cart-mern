const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use("/order", require("./controller/cart.controller"))
app.use("/admin", require("./controller/admin.controller"))


let server = app.listen(5000, function(){
	console.log('Server listen on port: 5000');
})