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
       router.get("/dashbaord", function(req,res){
          userController.indexView(req,res);
          if (request.session.loggedin) {
            response.render('../views/layout.ejs ');
        } else {
            response.send('Please login to view this page!');
        }
        response.end();
       });
    
    module.exports =router;

    
// router.get('/',indexView);

// module.exports={
//     routes:router
// }