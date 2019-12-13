import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ProfileService } from '../profile.service';
 declare    var $:any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public rs:Router,public ls:LoginService,public ps:ProfileService) { }
data:any
  ngOnInit() {
    setTimeout(() => {
    this.ls.logout()
      
    }, 0);
  }
  loginObj(obj){
    // console.log("login obj in front end in ts",obj);
//     if(obj.username=="admin" && obj.password=="admin"){
// this.rs.navigate(["profile"])


$("#myModal1").modal("hide");
this.ls.login(obj).subscribe((res=>{
  // console.log("login ts",obj);
  if(res["message"]=="login successfully")
  {
    alert(res["message"])
    this.data=res["obj"]
    this.sendData()
    // 
    localStorage.setItem("token",res["token"])
    // 
    localStorage.setItem("username",res["username"])
    this.rs.navigate(["user",res["username"]]);
  }
  else
  {
alert(res["message"])
  }
  
 
}))
    }
    
    sendData(){
      this.ps.getData(this.data)
    }
  }


