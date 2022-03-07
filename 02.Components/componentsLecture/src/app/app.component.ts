import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showText = true;
  title = '1';

  users = [{
    name : 'Toni',
    age : 31
  }, 
  {
    name : 'Ivan',
    age : 13
  }, 
  {
    name : 'Petkan',
    age : 311
  }, 
]

  ngAfterViewInit(): void{
    debugger;
  }

  changeTitle(inputEl : HTMLInputElement){    
    this.title = inputEl.value;
    inputEl.value = '';
  }

  // buttonClickHandler(): void {
  //   this.title++;  
  // }

  toggleText(ev : Event): void{
    console.log(ev);
    
    this.showText = !this.showText;
  }
}
