import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
// import {UsersMapContainerModule} from "ht-angular";

@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule
    
  ],
  declarations: [AddUserComponent, DeleteUsersComponent, EditUserComponent]
})
export class UserManagementModule { }
