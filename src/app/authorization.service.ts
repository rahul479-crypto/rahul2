import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService  implements HttpInterceptor {

  constructor() { }
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
const token=localStorage.getItem("token")
if(token){
  const cloneObj=req.clone({
    headers:req.headers.set("Authorization" ,"Bearer "+token)
  })
  console.log(cloneObj)
  return next.handle(cloneObj)
  
}
else{
  return next.handle(req)
}
}
}


