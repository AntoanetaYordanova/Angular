import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private symbols: number = 250;
  @Input() article!: Article; 
  @Input() articleDescr!: string;
  descrToShow: string;
  articleDescrLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsSHown: boolean = false;
  imageButtonTitle: string = 'Show Image';

  constructor() { 
    this.articleDescrLen = 0;
    this.descrToShow = '';
  }

  readMore(): void{
    this.articleDescrLen += this.symbols;
    if(this.articleDescrLen >= this.articleDescr.length) {
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
    } else {
      this.descrToShow = this.articleDescr.substring(0, this.articleDescrLen);
    }
  }

  toggleImage(): void {
    this.imageIsSHown = !this.imageIsSHown;
    this.imageButtonTitle = this.imageButtonTitle == 'Show Image' ? 'Hide Image' : 'Show Image';
  }

  hideDesc(): void {
    this.descrToShow = '';
    this.articleDescrLen = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }
 
  ngOnInit(): void {
  }

}
