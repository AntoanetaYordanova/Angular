import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParamsActivate } from '../core/guards/params.activate';
import { NotFoundComponent } from '../not-found/not-found.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'user-details',
    redirectTo: 'users'
  },
  {
    path: 'user-details/:id',
    component: UserDetailComponent,
    canActivate: [ ParamsActivate ],
    data: {
      paramsActivate: ['id'],
      paramsActivateRedirectUrl: '/users'
    }
  },
   {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
