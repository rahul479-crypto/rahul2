import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// declare var $:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public hc:HttpClient,public rs:Router) { }

  ngOnInit() {
   
  }
  userObj(obj){
    console.log("registetion form in front end ts",obj);
    // $("#myModal").modal("hide");

    
this.hc.post("/user/register",obj).subscribe((res=>{

  if(res["message"]=="Registetion successfully"){
    alert(res["message"])
this.rs.navigate(["login"])

  }
  else
  {
    alert(res["message"])

  }
}))
    
    
  }


  

}
