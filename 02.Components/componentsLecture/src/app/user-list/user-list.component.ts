import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() userArray: IUser[] = [];
  @Output() addUser = new EventEmitter<IUser>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewUser(nameInput : HTMLInputElement, ageInput : HTMLInputElement){
    const { value : name } = nameInput;
    const age = Number(ageInput.value);

    this.addUser.emit({name, age})
    nameInput.value = '';
    ageInput.value = '';
    
  }

}
