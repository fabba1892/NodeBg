const Employee = require("../models/employee");
exports.getdefault = function (req, res) {
  res.send("You are the root route. Awe LucaSkywlkr🤖");
};

exports.aboutUs = function (req, res) {
  res.send("You are on the about us page 🔱");
};

exports.addemployee = function (req, res) {
  //res.send("Employee route page🗼")    ;
  let empName = req.body.empName;
  let empPass = req.body.empPass;
  res.end(`Post success, you sent ${empName} and ${empPass}, thanks👍🏽 `);
};

exports.getemployees = function (req, res) {
  Employee.find({})
    .then((data) => {
      console.log("Data:", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
  //res.send("Get Docs page 📂");
};
