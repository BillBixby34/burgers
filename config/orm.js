//Import (require) `connection.js` into `orm.js`
var connection = require("./connection.js");
//methods that will execute mysql commands
//function selectAll(){};

//function insertOne(){};

//function updateOne(){};


var orm = {
	selectAll: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result){
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
insertOne: function(table, cols, vals, cb) {
	var queryString = "INSERT INTO " + table;
},
	//objColVals will be {burger_name: cheese, devoured: false}
	updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
}
//* `selectAll()` 
//   * `insertOne()` 
// * `updateOne()` 

module.exports = orm;