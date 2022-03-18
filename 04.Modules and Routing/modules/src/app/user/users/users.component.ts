import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent{
  users: IUser[] | undefined;

  constructor(private userService : UserService) {
    this.users = undefined; 
    userService.loadUsers().subscribe(users => this.users = users);
  }

}
