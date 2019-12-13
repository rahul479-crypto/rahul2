// install and import jsonwebtoken
const jwt=require("jsonwebtoken");
// middleware function
var checkAuth=(req,res,next)=>{
    // check for value of authorization proparty in request handler
  var   tokenWithBearer=req.headers["authorization"];
  console.log("hello",tokenWithBearer)
//   if valuen not found
if(tokenWithBearer===undefined){
    return res.json({message:"please login into access to login page"})
}
// if value of authorization is found,remove first seven(7) characters from value
if(tokenWithBearer.startsWith("Bearer ")){
    // remove bearer from string
     token=tokenWithBearer.slice(7,tokenWithBearer.length)
     console.log(token)
     jwt.verify(token,'bala',(err,decoded)=>{
        console.log("shyam",decoded)
         if(err){
             
            return res.json({message:"please re-login your session expired"})
            
         }
         next();

     })
}
}
// export middleware in verifyingtoken
module.exports=checkAuth;


// const jwt=require("jsonwebtoken")

// const checkAuth=(req,res,next)=>{
  
    
//         if(bearerWithToken.startsWith("Bearer ")){
// token=bearerWithToken.slice(7,bearerWithToken.length)
// jwt.verify(token,'bala')
//         }
//         next()
//     }


// // 
// module.exports=checkAuth;


























