const express =require('express');
//const{indexView}=('../controllers/homeController');
let userController = require('../controllers/homeContoller');
const router = express.Router();

router.get("/dashboard", function(req, res) {
    userController.indexView(req,res);
    });
     router.get("/", function(req, res) {
        userController.loginView(req,res);
        });
    
    module.exports =router;

    
// router.get('/',indexView);

// module.exports={
//     routes:router
// }