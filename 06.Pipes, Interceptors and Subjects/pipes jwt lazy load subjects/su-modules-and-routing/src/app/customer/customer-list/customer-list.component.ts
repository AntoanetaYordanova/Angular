import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService, IUser } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  
  // text = new Promise((res, rej) => {
  //   setTimeout(()=> {
  //     res('show some text');
  //   })
  // });

  customers$!: Observable<IUser[]>;

  customers: IUser[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    // this.customerService.getUsers$().subscribe(users => {
    //   this.customers = users;
    // })
    this.customers$ = this.customerService.getUsers$();
    console.log(this.customers$);
    
  }
}
