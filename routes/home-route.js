const express =require('express');
//const{indexView}=('../controllers/homeController');
let userController = require('../controllers/homeContoller');
const router = express.Router();

// router.get("/dashboard", function(req, res) {
//     userController.indexView(req,res);
//     });
     router.get("/", function(req, res) {
        userController.loginView(req,res);
        });
       router.post("/dashboard", function(req,res){
          userController.indexView(req,res);
          if (req.session.loggedin) {
            res.render('../views/layout.ejs ');
        } else {
            res.send('Please login to view this page!');
        }
        res.end();
       });
    
    module.exports =router;

    
// router.get('/',indexView);

// module.exports={
//     routes:router
// }