import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  users: IUser[] | undefined;
  constructor(public userService: UserService) {};

  ngOnInit(): void {
    this.userService.loadUsers().subscribe(users => this.users = users);
  }

  searchHandler(input: HTMLInputElement) {
    const { value } = input;
    this.userService.loadUsers(value);
  }
}
