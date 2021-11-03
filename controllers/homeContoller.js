var connection  = require('../config/db.config');



module.exports = {
   indexView: async function (req, res,next) {
      res.render('../views/layout.ejs');
   },
   loginView: async function (req, res,next) {
      res.render('../views/login.ejs');
   
}
}


// module.exports = {
//    loginView: async function (req, res,next) {
//       res.render('../views/login.ejs');
//    }
// }




// const ifNotLoggedin = (req, res, next) => {
//    if(!req.session.isLoggedIn){
//        return res.render('login-register');
//    }
//    next();
// }

// const ifLoggedin = (req,res,next) => {
//    if(req.session.isLoggedIn){
//        return res.redirect('/home');
//    }
//    next();
// }
