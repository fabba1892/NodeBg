module.exports = function (router) {
    router.get("/", (req, res) => res.send("Awe from Parow"));
    router.post('/addemployee', function(req, res){
        let empName = req.body.empName;
        let empPass = req.body.empPass;
        res.end(`Post success, you sent ${empName} and ${empPass}, thanks`);  
      });
      
      router.get('/aboutus', function(req, res) {
        res.send("You are on the about us page");
      });
}