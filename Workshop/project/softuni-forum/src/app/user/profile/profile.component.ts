import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  get user() {
    return this.userService.user;
  }
  constructor(private userService: UserService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  editProfile(){
    this.router.navigate(['profile/edit'])
  }
}
