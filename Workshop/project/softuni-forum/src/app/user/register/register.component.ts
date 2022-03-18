import { Component, OnInit } from '@angular/core';
import { faLock, faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  faLock = faLock;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faUser = faUser;
  
  constructor() { }

  ngOnInit(): void {
  }

}
