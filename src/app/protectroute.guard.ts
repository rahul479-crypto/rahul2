import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt'


@Injectable({
  providedIn: 'root'
})
export class ProtectrouteGuard implements CanActivate {
b:boolean
  constructor(public router:Router,public hc:HttpClient){}
  canActivate():boolean
  {

  let token=localStorage.getItem("token")

  let helper=new JwtHelperService()
   
  if(token){
    let decodedToken=helper.decodeToken(token)
    if((decodedToken.exp>=Math.floor(Date.now()/1000)==true)){
      return true ;

    }
    else{
      alert("from-guard-sorry...token expired");
      this.router.navigate(["login"])
      return false;
    }

  

  }
  else{
    alert("from guard-plz login to access page")
    this.router.navigate(["login"])
    // alert("please login")
    return false;
  }

  }
  
}
