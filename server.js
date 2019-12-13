// install and import express
const exp=require("express")
const app=exp()
// import and install mongoose
const mongoose=require("mongoose")
// import and install path
const path=require("path")
// import userapi
const userapi=require("./backend/apis/userapi")
// use userapi
app.use("/user",userapi)
// interpoletion in using path
app.use(exp.static(path.join(__dirname,"./dist/rest")))


// assign port number
const PORT=2617;
app.listen(PORT,()=>{
    console.log(`main server lisen in ${PORT}`);
    
})