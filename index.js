const express = require("express");
const port = 8000;
const app = express();
//
app.get("/", (req, res) => res.send("Awe from Parow"));
//
app.post('/addemployee', function(req, res){
  let empName = req.body.empName  ;
  let empPass = req.body.empPass;
  res.end(`Post success ` + empName);  

})
//
app.listen(port, () => console.log("Listening " + port));

