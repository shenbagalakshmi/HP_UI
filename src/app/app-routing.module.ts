import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {TrackHomeComponent} from './track-home/track-home.component'
import { LoginSectionComponent } from './login-section/login-section.component';


const appRoutes: Routes = [
  { path: 'homeNav', component: TrackHomeComponent },
  {path:'login',component:LoginSectionComponent},
  {
    path: 'userMgmt',
    loadChildren: 'app/user-management/user-management.module#UserManagementModule',
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}