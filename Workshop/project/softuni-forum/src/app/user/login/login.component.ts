import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';
import { emailValidator } from '../util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorMessage: string = '';
  faLock = faLock;
  faEnvelope = faEnvelope;
  loginFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, emailValidator]),
    'password': new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
    ) { 
  }

//  login(email: string, password: string): void{
//   this.userService.login(email, password);
//   const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '';
//   this.router.navigate([redirectUrl]);
//  }

 handleLogin(): void{  
  const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '';
   
    this.errorMessage = '';
   const body = {
    email: this.loginFormGroup.controls['email'].value,
    password: this.loginFormGroup.controls['password'].value,
   }
  this.userService.login(body).subscribe({
    next: () => {   
      this.router.navigate([redirectUrl]);
    },
    error: (err) =>  this.errorMessage = err.error.message   
  });
 }
}
