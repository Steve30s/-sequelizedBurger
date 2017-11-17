var express = require('express');
var burgersToDevour	= require("../models")["burgersToDevour"];
var router = express.Router();

router.get('/', function(req,res) {
  burgersToDevour.findAll()
    .then(function (data) {
      res.render('index', {burgers:data})
    });
});

router.post('/create', function(req,res){
  var burgerName = req.body.burger_name;
	burgersToDevour.create({
		burgerName: burgerName,
		devoured: false
	});
  res.redirect('/');
});

router.put('/update', function(req,res){
	var id = req.body.id;
  console.log(id);
  burgersToDevour.update(
    { devoured: true},
    { where: { id: id}}
  );
  res.redirect('/');
});

module.exports = router;
