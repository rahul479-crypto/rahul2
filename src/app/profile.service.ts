import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(public hc:HttpClient) { }

//   getData():Observable<any>
// {
//   return this.hc.get<any>("http://dummy.restapiexample.com/api/v1/employee/1")
// }

data:any
getData(obj){
this.data=obj
}
setData(){
return this.data;
}


  
}
