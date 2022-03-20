import { Component, OnInit } from '@angular/core';
import { faLock, faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  faLock = faLock;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faUser = faUser;
  
  constructor(private userService: UserService) { }

  register(email: string, password: string): void{
    this.userService.login(email, password);
  }

}
