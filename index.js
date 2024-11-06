const express = require("express");
const port = 8000;
const app = express();
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//
router.get("/", (req, res) => res.send("Awe from Parow"));
//
router.post('/addemployee', function(req, res){
  let empName = req.body.empName;
  let empPass = req.body.empPass;
  res.end(`Post success ` + empName + ` password ` + empPass);  
});

router.get('/aboutus', function(req, res) {
  res.send("You are on the about us page");
});

app.use('/', router);
//
app.listen(port, () => console.log("Listening " + port));

