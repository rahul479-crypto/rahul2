// install and import express
const exp=require("express")
// connect mini express
const userapi=exp.Router()
// import and install mongoose
const mongoose=require("mongoose")
// install and import body parser
const bodyParser=require("body-parser")
// 
userapi.use(bodyParser.json())
// 
const util=require("util")
// 
const bcrypt=require("bcrypt")
// 
const jwt=require("jsonwebtoken")
// import Schema
const student=require("../models/schema")
// 
const checkAuth=require("../middlewares/VerifyToken")


// connect with database in url
const dburl="mongodb+srv://rahul:rahul@cluster0-zbgco.mongodb.net/test?retryWrites=true&w=majority"
// connection db
mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true})
// .then(()=>{
//     console.log("connection database in successfully");
    
// }).catch((err)=>{
//     console.log("error in datadbase connection is ",err);
    
// })

const connection=mongoose.connection
// check for connection event
connection.on("connected",()=>{
    console.log("connection database successfully");
    
});
connection.on('disconnected',()=>{
    console.log("error in database connection disconnected");
    
});
connection.on("error",()=>{
    console.log("error in database connection error");
    
})



// req handler post
userapi.post("/register",(req,res)=>{
    console.log("this is post req handler",req.body);

student.findOne({username:req.body.username}).exec() 
.then((userObj)=>{
if(userObj!==null)
{
    res.json({message:"user name alredy existed please choose anothe username "})
}
else
{
let password=req.body.password;
bcrypt.hash(password,7)
.then((hashedpassword)=>{
    req.body.password=hashedpassword;
    console.log("hashed password in bcrypt",hashedpassword);
    const stuObj=new student({
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        username:req.body.username,
        MobileNumber:req.body.MobileNumber,
        Gender:req.body.Gender,
        password:req.body.password,
    })
    
    stuObj.save()
    .then((result)=>{
        res.json({message:"Registetion successfully",result})
        console.log("before save data",result);

    }).catch((err)=>{
        console.log("error in registation data",err);
        
    })
    
}).catch((err)=>{
    console.log("error in password hashind",err);
    
})
}
}).catch((err)=>{
console.log("error in entair registation form post req",err);

})
 
})

// req handler in login post
userapi.post("/login",(req,res)=>{
    console.log("this is login post req handler",req.body);
    
    student.findOne({username:req.body.username}).exec()
    .then((userObj)=>{
if(userObj==null)
{
    res.json({message:"invalid username"})
}
else 
{
bcrypt.compare(req.body.password,userObj.password)
.then((result)=>{
if(result==false){
    res.json({message:"invalid password"})
}
else
{
// res.json({message:"login successfully"})

    const jwtSign=util.promisify(jwt.sign)

jwtSign({username:userObj.username},'bala',{expiresIn:20})
.then((signedToken)=>{
    res.json({message:"login successfully",token:signedToken,username:userObj.username,obj:userObj})
}).catch((err)=>{
    console.log("error in token genration",err);
    
})



}
}).catch((err)=>{
    console.log("error in password comparetion",err);
    
})
}
    }).catch((err)=>{
        console.log("error in entaire token genration",err);
        
    })
})


// get req handler
userapi.get("/profile",checkAuth,(req,res)=>{
    console.log("get data from profile",req.params);
    student.findOne({username:req.params.username}).exec()
    .then((result)=>{
        res.json({message:result})
    }).catch((err)=>{
        console.log("error in get method in get data from profile",err);
        
    })
    
})

// req handler in put method


userapi.put("/update",(req,res)=>{
    console.log("update data is ",req.body);
    
//     student.updateOne({username:req.body.username},{$set:{FirstName:req.body.FirstName,
//         LastName:req.body.LastName,
//         MobileNumber:req.body.MobileNumber,
//         Gender:req.body.Gender}
// }).exec()   
// .then(()=>{
//     student.findOne({username:req.body.username}).exec()
//     .then((result)=>{
//         if(result==null){
//             res.json({message:`please post data from  ${req.body.username} `})
//         }
//         else{
//         res.json({message:"update successfully"})

//         }

//     }).catch((err)=>{
//         console.log("error in UPDATE data",err);
        
//     })


// }).catch((err)=>{
//     console.log("error occured in  update ",err);
    
// })
});


// 
userapi.delete('/delete/:username',(req,res)=>{
    console.log("delete in data is",req.body);
    
    student.findOne({username:req.params.username}).exec()
    .then((result)=>{
      
        
            student.deleteOne({username:req.params.username}).exec()
            .then(()=>{
             
                res.json({message:`productId ${req.params.username} is deleted successfully`})

        }).catch((err)=>{
            console.log("error in delete ",err);
            
        }).catch((err)=>{
            console.log("error in delete operation ",err);

        })
        

    })

})    



















// exports userapi
module.exports=userapi