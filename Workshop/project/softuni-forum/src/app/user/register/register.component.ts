import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock, faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';
import { emailValidator, passwordMatch } from '../util';


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

  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(5)]);

  get passwordsGroup(){
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  registerFormGroup: FormGroup = this.formBuilder.group({
    'username': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    'email': new FormControl(null, [Validators.required, emailValidator]),
    'tel': new FormControl(null, []),
    'telRegion' : new FormControl(null),
    passwords: new FormGroup({
      'password': this.passwordControl,
      'rePassword': new FormControl(null, [Validators.required, passwordMatch(this.passwordControl)]),
    })
  });
  
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  // register(email: string, password: string): void{
  //   this.userService.login(email, password);
  // }
  
  shouldShowControlError(controlName: string) {
    return this.passwordsGroup.controls[controlName].invalid && this.passwordsGroup.controls[controlName].touched;
  }

  handleRegister(){
    const {username, email, passwords, tel, telRegion} = this.registerFormGroup.value
    const body = {
      username: username,
      email: email,
      password: passwords.password,
      ...(!!tel && {tel: telRegion + tel})
    }
    this.userService.register(body).subscribe(() => {
      this.router.navigate(['/home']);
    });
    // console.log(result);
  }
}
