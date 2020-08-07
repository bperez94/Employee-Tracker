var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

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
  initAdd();
});



// inital function of possible adds
function initAdd() {
  inquirer
    .prompt ({
      name: "add",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "add department",
        "add position",
        "add employee",
        "done"
      ]
    })
    .then(function(answer) {
      switch (answer.add) {
        case "add department":
        addDept();
        
      } 
      switch (answer.add) {
        case "add position":
        addPos();
        break;
      } 
      switch (answer.add) {
        case "add employee":
        addEmp();
        break;
      } 
      switch (answer.add) {
        case "done":
        break;
      }
        
    })
    .catch((err) => {
      console.log("err");
    });
}
// add department function
function addDept() {
  inquirer.prompt ([
    {
      type: "input",
      name: "id",
      message: "what is your id number?"
    },
    {
      type: "input",
      name: "name",
      message: "what is your name?"
    },
  ])
  .then((answer) => {
     console.table(answer);
     //sql query goes here
  }).catch((err) => {
    console.log(err.message);
  });

  

}

// add position function
function addPos() {
  inquirer.prompt ([
    {
      type: "input",
      name: "id",
      message: "what is you id number?"
    },
    {
      type: "input",
      name: "title",
      message: "What is yor job title?"
    },
    {
      type: "input",
      name: "salary",
      message: "what is your salary?"
    },
    {
      type: "input",
      name: "dep id",
      message: "what is your department id?"
    },
  ])
  .then((answers) => {
    console.table(answers);
    //sql query
  }).catch((err) => {
    console.log(err.message);
  });
}

function addEmp() {
  inquirer.prompt ([
    {
      type: "input",
      name: "id",
      message: "whats your id number?"
    },
    {
      type: "input",
      name: "FName",
      message: "whats your first name?"
    },
    {
      type: "input",
      name: "LName",
      message: "Whats your last name?"
    },
    {
      type: "input",
      name: "position",
      message: "Whats your position id number?"
    },
    {
      type: "input",
      name: "manager",
      message: "if manager please ad manager id number?"
    },
  ])
  .then((answers) => {
    console.table(answers);
  }).catch((err) => {
    console.log(err.message);
  });
}


