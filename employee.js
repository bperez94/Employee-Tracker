var mysql = require("mysql");
var inquirer = require("inquirer");
//const cTable = require('console.table');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "lowercase",
  database: "employeeDB"
});
connection.connect(function (err) {
  if (err) throw err;
  whichDepart();
});

connection.end();

/*function whichDepart() {
  inquirer
    .prompt ({
      name: "department",
      type: "input",
      message: "what department do you work for?"
    })
    .then(function(answer) {
      console.log(answer);
    })
    .catch((err) => {
      
    });
}*/

