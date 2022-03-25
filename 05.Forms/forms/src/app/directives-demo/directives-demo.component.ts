import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { HighlightDemoDirective } from '../highlight-demo.directive';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent implements OnInit, AfterViewInit {
  @ViewChild('directive') directive!: HighlightDemoDirective;

  constructor() { }

  ngOnInit(): void {
  }

  handleColorChange(newColor: string){
    console.log(`Color changed. New color: ${newColor}`);
  }

  ngAfterViewInit(): void {
    console.log(this.directive);
    
  }
}
