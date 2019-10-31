var db = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];
  //pass value as string and loop through
  if (Object.hasOwnProperty.call(ob, key)) {
    if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
    }
    arr.push(key + "=" + value);
}
}

return arr.toString();

//set up methods to order retrieve and store data
var orm = {
  
  // Show all burgers in the databse (refer back to CAT project).
  selectAll: function(table, cb) {
      var queryString = "SELECT * FROM " + table + ";";

      connection.query(queryString, function(err, result) {
          if (err) {
              throw err;
          }
          cb(result);
      });
  },
  // Add a burger to the db.
  insertOne: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table;
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";

      console.log(queryString);

      connection.query(queryString, vals, function(err, result) {
          if (err) {
              throw err
          }
          cb(result);
      });
  },
  // Set burger devoured status to true.
  updateOne: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;

      console.log(queryString);

      connection.query(queryString, function(err, result) {
          if (err) {
              throw err
          }
          cb(result);
      });
  },
  // Delete a burger
  deleteOne: function(table, condition, cb) {
      var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;

      console.log(queryString);

      connection.query(queryString, function(err, result) {
          if (err) {
              throw err
          }
          cb(result);
      });
  }
};

// Export the ORM object in module.exports.
module.exports = orm;