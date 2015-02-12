var router =  require('express').Router();


router .get('/',function(req, res) {
	res.set({"Content-Disposition":"attachment; filename=hola.txt"});
   	res.send("Hola");
});


module.exports =  router;