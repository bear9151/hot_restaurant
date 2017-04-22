// ===============================================================================
// LOAD DATA
// We are requiring our data sources for our routes
// These data sources hold arrays of information on table-data & waitinglist
// ===============================================================================

var tables = require("../data/tableData.js"),
	waitinglist = require("../data/waitinglistData.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

	//add get and post routes for api
	app.get("/app/:customer?", function(req, res) {
		var chosen = req.params.customer;

		if (chosen) {
			for (var i = 0; i < tables.length; i++) {
				if (chosen === tables[i].routeName) {
					return res.json(tables[i]);
				}
			}
			return res.json(false);
		}
		return res.json(tables);
	})

	app.get("/waitinglist/:customer?", function(req, res) {
		var chosen = req.params.customer;

		if (chosen) {
			console.log(chosen);

			for (var i = 0; i < waitinglist.length; i++) {
				if (chosen === waitinglist[i].routeName) {
					return res.json(waitinglist[i]);
				}
			}
			return res.json(false);
		}
		return res.json(waitinglist);
	})

	app.get("/app/:customer?", function(req, res) {
		if (tables.length <= 5) {
			alert("FALSE");
			return false;
		} else {
			alert("TRUE");
			return true;
		}
	})

};