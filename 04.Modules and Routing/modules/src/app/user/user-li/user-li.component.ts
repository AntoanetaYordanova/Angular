import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-li',
  templateUrl: './user-li.component.html',
  styleUrls: ['./user-li.component.scss']
})
export class UserLiComponent implements OnInit {
  @Input() user!: IUser;
  constructor() { }

  ngOnInit(): void {
  }

}
