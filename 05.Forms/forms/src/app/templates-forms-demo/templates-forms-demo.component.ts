import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templates-forms-demo',
  templateUrl: './templates-forms-demo.component.html',
  styleUrls: ['./templates-forms-demo.component.css']
})
export class TemplatesFormsDemoComponent implements OnInit, AfterViewInit {
  operatingSystem: string[] = ['Windows 10', 'Linux', 'Mac OS'];

  @ViewChild('laptopForm') laptopForm!:NgForm;

  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    console.log(this.laptopForm);   
  }

  onSubmit(): void{
    console.log('ok');
    
    console.log(this.laptopForm.value);   
  }
}
