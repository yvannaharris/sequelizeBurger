var db = require("../models");

var path = require("path");

module.exports = function(app) {
	app.get("/", function(req, res) {
		db.Burger.findAll({}).then(function(dbBurger) {
		res.render("../views/index", {burgers: dbBurger});
		});

	});

	app.delete("/burgers/:id", function(req, res) {
	    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
		res.render("../views/index", {burgers: dbBurger});    	
    })

	});

	app.post("/burgers", function(req, res) {
		db.Burger.create({
      		burger_name: req.body.burger_name,
      		devoured: req.body.devoured
    	}).then(function(dbBurger) {
			res.render("..views/index", {burgers: dbBurger});    	
    	});

	});

	app.put("/:id", function(req, res) {
    db.Burger.update({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBurger) {
			res.render("../views/index", {burgers: dbBurger});
		});
	});
	
};
