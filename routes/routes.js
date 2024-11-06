const controller = require('../controllers/controller');
module.exports = function (router) {
    router.get("/", controller.getdefault);
    router.post('/addemployee', function(req, res){
        let empName = req.body.empName;
        let empPass = req.body.empPass;
        res.end(`Post success, you sent ${empName} and ${empPass}, thanks`);  
    });
    router.get('/aboutus', controller.aboutUs);
}