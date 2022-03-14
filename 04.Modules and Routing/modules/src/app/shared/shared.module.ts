import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time/time.component';



@NgModule({
  declarations: [
    TimeComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    TimeComponent
  ]
})
export class SharedModule { }
