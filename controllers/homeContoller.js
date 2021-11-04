var connection  = require('../config/db.config');



module.exports = {
   // indexView: async function (req, res,next) {
   //    res.render('../views/layout.ejs');
   // },
   loginView: async function (req, res,next) {
      res.render('../views/login.ejs');   
},
     indexView: async function (req,res,next){
      var username = req.body.username;
      var password = req.body.password;
      if (username && password) {
         connection.query('SELECT * FROM logUser WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
            if (results.length > 0) {
               req.session.loggedin = true;
               req.session.username = username;
               response.redirect('/dashbaord');
            } else {
               response.send('Incorrect Username and/or Password!');
            }			
            response.end();
         });
      } else {
         response.send('Please enter Username and Password!');
         response.end();
      }
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
