var db = require("../models");

var path = require("path");

module.exports = function(app) {
	app.get("/", function(req, res) {
		res.render("../views/index");
	});

	app.get("/burgers/:id", function(req, res) {
		res.render("../views/index");
	});

	app.get("/burgers", function(req, res) {
		res.render("..views/index");
	});
	
};

