var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res) {
	burger.create({
		"burger_name": req.body.burger_name,
		"devoured":req.body.devoured
	},
	function() {
			res.redirect("/");
		});
});

router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	burger.updateOne({
		devoured: req.body.devoured
	}, condition, function() {
		res.redirect("/");
	});
});

router.delete("/:id",function(req, res) {
	var condition = "id = " + req.params.id;

	burger.delete(condition, function() {
		res.redirect("/");
	});
});


module.exports = router;