import { Component, OnDestroy } from '@angular/core';
import { interval, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnDestroy {
  time$: Observable<Date> = interval(1000).pipe(
    map(() => new Date())); 

  timeSubscribtion: Subscription  
  timeValue!: Date 

  constructor() { 
    this.timeSubscribtion = this.time$.subscribe(time => this.timeValue = time);
  }

  ngOnDestroy(): void {
    this.timeSubscribtion.unsubscribe();
  }
}
