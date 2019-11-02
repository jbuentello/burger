var orm = require("../config/orm.js");

//Find all of the burgers in the database
var burger = {
  selectALL: function(cb){
    orm.selectALL("burgers", function(res){
      cb(res);
    });
  },
// Be able to add a burger to the db
  insertOne: function(cols, vals, cb){
    orm.insertOne("burgers",cols, vals, function(res){
      cb(res);
    });
  },
  //If the burger is devoured set the status to true
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
    });
  },
  //Be able to delete the burger from the db
  deleteOne: function(condition, cb) {
    orm.deleteOne("burgers", condition, function(res) {
        cb(res);
    });
  } 
};

module.exports = burger;

