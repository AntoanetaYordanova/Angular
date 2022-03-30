import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.scss']
})
export class NewThemeComponent implements OnInit {

  constructor(private router: Router, 
    private themesService: ContentService) { }

  ngOnInit(): void {
  }


  submitTheme(newThemeForm: NgForm){
    console.log(newThemeForm.value);
    this.themesService.addTheme(newThemeForm.value).subscribe({
      next: (theme) => {
        console.log(theme);
        this.router.navigate(['/themes'])
      },
      error: (err) => console.log(err)
      
    });
  }

  navigateToHome(){
    this.router.navigate(['/home']);
  }
}
