var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log("GET");

	Item = mongoose.model('Item');
	Item.find({},function(err, items){
		if (err) throw err;

		res.json(items);
	});
});

router.post('/', function(req, res, next){
	console.log("POST");

	Item = mongoose.model('Item');
	Item.create( { nombre: req.body.nombre, cantidad : req.body.cantidad },
	function(err, item){
		if (err) throw err;

		res.json(item);
	});
});

module.exports = router;
