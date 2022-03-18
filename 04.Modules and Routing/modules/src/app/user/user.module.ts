import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRoutingModule } from './user.routing.module';
import { UsersComponent } from './users/users.component';
import { UserLiComponent } from './user-li/user-li.component';
import { UserService } from './user.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UserDetailComponent,
    UsersComponent,
    UserLiComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  exports: [
    UserDetailComponent,
    UsersComponent
  ],
  providers : [
    UserService
  ]
})
export class UserModule { }
