import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from '../home/home.component';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
