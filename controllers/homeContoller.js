// const indexView =(req,res,next)=>{
//     res.render('home');
// }

// module.exports={
//     indexView
// }

exports.indexView= function(req,res){
   res.render('../views/layout.ejs');
};