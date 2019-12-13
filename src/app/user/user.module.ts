import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { UserRoutingModule } from './user-routing.module';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { BalaComponent } from './bala/bala.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [UserdashboardComponent, ProfileComponent, BalaComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
