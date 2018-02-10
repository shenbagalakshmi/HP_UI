import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';







const umRoutes: Routes = [
  {path:'addUser',component:AddUserComponent},
 
  { path: '',   component:AddUserComponent, pathMatch: 'full' },
];



@NgModule({
  imports: [RouterModule.forChild(umRoutes)],
  exports: [RouterModule]
})

export class UserManagementRoutingModule { }
