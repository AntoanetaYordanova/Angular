import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnDestroy {
  timeSubscription!: Subscription

  time$ = interval(1000).pipe(
    map(() => new Date()));

  timeValue!: Date;

  constructor() { 
    this.timeSubscription = this.time$.subscribe(timeValue => this.timeValue = timeValue)
  }

  ngOnDestroy(): void {
    this.timeSubscription.unsubscribe();
  }

}
