import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public hc:HttpClient,public rs:Router) { }


login(userObj):Observable<any>
{
  console.log("login service",userObj);

if(userObj.name=="user"){
return this.hc.post("/user/login",userObj)
}
else{
  return this.hc.post("/admin/login",userObj)
}
}
logout(){
localStorage.removeItem("token")
this.rs.navigate(["login"])

}
isLoggedIn()
{
const token=localStorage.getItem("token")
if(token==null){
return false
}
else
{
  return true
}
}



}
