import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rest';



constructor(public ls:LoginService){}
  ngOnInit() {
    
    this.ls.logout()
      
  }
}
