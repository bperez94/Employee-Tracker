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
  database: "employeeDB",

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
        "view department",
        "view position",
        "view employee",
        "done"
      ]
    })
    .then(function(answer) {
      switch (answer.add) {
        case "add department":
        addDept();
        break;
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
        case "view department":
          viewDep();
        break;
      }
      switch (answer.add) {
        case "view position":
          viewPos();
        break;
      }
      switch (answer.add) {
        case "view employee":
          viewEmp();
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
      name: "deptName",
      message: "what is your department's name?"
    },
  ])
  .then (function(answer) {
    connection.query('INSERT INTO department (id,department_Name) VALUES (?,?)', [answer.id,answer.deptName], function(err,result) {
      if (err) throw err;
      console.table("added " + answer.deptName + " department.\n" );
      initAdd();
    });
   
  })
 
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
      name: "department_id",
      message: "what is your department id?"
    },
  ])
  .then (function(answer) {
    connection.query('INSERT INTO position (id, title, salary, department_id) VALUES (?,?,?,?)',[answer.id,answer.title,answer.salary,answer.department_id,], function(err,result) {
      if (err) throw err;
      console.table("added " + answer.title + " department.\n" );
      initAdd();
    });
  })
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
      name: "fName",
      message: "whats your first name?"
    },
    {
      type: "input",
      name: "lName",
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
  .then (function(answer) {
    connection.query('INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (?,?,?,?,?)', [answer.id,answer.fName,answer.lName,answer.position,answer.manager], function(err,result) {
      if (err) throw err;
      console.table("added " + answer.fName + " as employee.\n" );
      initAdd;
    });
  
  })
 
}

function viewDep() {
connection.query("SELECT * FROM department",function (err,res) {
  if (err) throw err;
  console.log("department displayed");
  console.table(res);
})
initAdd();
}

function viewPos() {
  connection.query("SELECT * FROM position",function (err,res) {
    if (err) throw err;
    console.log("position displayed");
    console.table(res);
  })
  initAdd();
}

function viewEmp() {
  connection.query("SELECT * FROM employee",function (err,res) {
    if (err) throw err;
    console.log("employee displayed");
    console.table(res);
  })
  initAdd();
}
