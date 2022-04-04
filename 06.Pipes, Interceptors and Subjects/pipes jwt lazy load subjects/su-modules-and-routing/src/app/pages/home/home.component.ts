import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, subscribeOn, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,  OnDestroy {

  private activeUsers!: Promise<number>;

  private activeUsers$!: Observable<number>;

  private subscription!: Subscription;

  constructor(private titleService: Title) { }

  async ngOnInit(): Promise<void> {
    this.titleService.setTitle('Home Page');

    // const xhr = new XMLHttpRequest();
    // xhr.addEventListener('load', function () {
    //   const xhr1 = new XMLHttpRequest();
    //   xhr1.addEventListener('load', function () {
    //     const xhr3 = new XMLHttpRequest();
    //     xhr3.addEventListener('load', function () {
    //     });
    //   });
    // });

    // const r1 = await new Promise((resolve, reject) => {
    //   const xhr = new XMLHttpRequest();
    //   xhr.addEventListener('load', function () {
    //     resolve(this.responseText);
    //   })
    // });

    // const r2 = await new Promise((resolve, reject) => {
    //   const xhr = new XMLHttpRequest();
    //   xhr.addEventListener('load', function () {
    //     resolve(this.responseText);
    //   })
    // })
    // const r3 = await new Promise((resolve, reject) => {
    //   const xhr = new XMLHttpRequest();
    //   xhr.addEventListener('load', function () {
    //     resolve(this.responseText);
    //   })
    // })

    this.subscription = new Observable((observer) => {
      let timer: any
      // setInterval(() => {
        timer = setTimeout(() => {
          const activeUsers= Math.round(Math.random() * 100);
  
          console.log('next', activeUsers);
          
          observer.next(activeUsers)
        }, 2000);
      // }, 4000);

      return () => {
        clearTimeout(timer);
      }
    }).subscribe(activeUsers => {
      console.log('activeUsers$',activeUsers);
    })

    this.activeUsers = new Promise<number>((resolve) => {
      // setInterval(() => {
        setTimeout(() => {
          const activeUsers = Math.round(Math.random() * 100);

          console.log('resolve', activeUsers);
          resolve(activeUsers);
        }, 2000)
      // }, 4000);
    });

    this.activeUsers
      .then(activeUsers => {
        console.log('activeUsers', activeUsers);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
