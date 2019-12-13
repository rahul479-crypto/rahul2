import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
username:string
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
this.username=this.router.snapshot.paramMap.get("username")
  }

}
