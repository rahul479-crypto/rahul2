import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { BalaComponent } from './bala/bala.component';
import { ProfileComponent } from './profile/profile.component';
import { ProtectrouteGuard } from '../protectroute.guard';



const routes: Routes = [
  {path:"user/:username",component:UserdashboardComponent,
  children:[
                                                             {path:"profile",component:ProfileComponent,canActivate:[ProtectrouteGuard]},
                                                               {path:"bala",component:BalaComponent}

                                                            ]
                                                          },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
