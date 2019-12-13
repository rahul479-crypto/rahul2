import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  receavedData:any[]=[];

  constructor(public ps:ProfileService,public hc:HttpClient) { }

  ngOnInit() {
this.receavedData.push(this.ps.setData())
    
let username=localStorage.getItem("username")
this.hc.get(`/user/profile/${username}`).subscribe(res=>{
 alert(res["message"]) 
})
  }

 
  username:any
  FirstName:any
  LastName:any
  MobileNumber:any
  Gender:any
edit(obj){
  console.log("edit data is",obj);
  
  this.username=obj.username
this.FirstName=obj.FirstName
this.LastName=obj.LastName
this.MobileNumber=obj.MobileNumber
this.Gender=obj.Gender
}
getData;
userObj(edited){
    console.log(edited)
this.hc.put("/update",{username:this.username,FirstName:edited.FirstName,LastName:edited.LastName,MobileNumber:edited.MobileNumber,Gender:edited.Gender}).subscribe(res=>{
this.getData=(res["message"])
console.log(this.getData)
 this.ngOnInit()
})
  }


  delete(stdObj){
    console.log("deleted obj is in ts file is",stdObj);
    this.hc.delete(`/delete/${stdObj.username}`).subscribe((res=>{  
      this.receavedData=(res["message"])
      this.ngOnInit()
    }))
  }
  // 
  // delete(stdObj)
  // {
  //   this.hc.delete(`/deletestudentDetails/${stdObj.studentid}/${stdObj.batchname}`).subscribe(res=>{
  //     if(res["message"] =="no student data found")
  //     {
  //       alert("no student data found")
  //     }
  //     else
  //     {
  //           this.studentDetailsArrayfromDb=res["message"];
  //     }
  //   })
  // }

}




