'use strict';

var express = require('express');
var auth = require('../../auth/auth.service');
var router = express.Router();

router.get('/', auth.isAuthenticated(), function(req, res,next){
	console.log("Algo paso")
	res.render()
});
router.post('/',auth.isAuthenticated(), function(req, res){

});

module.exports = router;