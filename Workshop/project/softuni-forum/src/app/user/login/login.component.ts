import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  faLock = faLock;
  faEnvelope = faEnvelope;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
    ) { 
  }

 login(email: string, password: string): void{
  this.userService.login(email, password);
  const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '';
  this.router.navigate([redirectUrl]);
 }

}
