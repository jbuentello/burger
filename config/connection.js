var db = require('mysql');

var db = mysql.createConnection({
  host     : '127.0.0.1',
  port     : 3306,
  user     : 'root',
  password : 'Saleen_454',
  database : 'bamazon'
});

db.createConnection(function(err){
  if (err){
  console.log("This doesnt work:" + err.stack);
  return;
}
  console.log("This has connected" + db.threadId);
});

module.exports = db;