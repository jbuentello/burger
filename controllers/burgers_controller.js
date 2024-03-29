var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router()
// Router

router.get("/", function(req, res) {
  burger.selectALL(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/api/burgers', function(req, res) {
  burger.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});

//devoured to true
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
      if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404.
          return res.status(404).end();
      } else {
          res.status(200).end();
      }
  });
});
// Delete from db.
router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.deleteOne(condition, function(result) {
      if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404.
          return res.status(404).end();
      } else {
          res.status(200).end();
      }
  });
});

module.exports = router;