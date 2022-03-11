import { Component } from '@angular/core';
import { ContentService } from './content.service';
import {  IPost } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: IPost[] | undefined;
  
  constructor(private contentService: ContentService) {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.posts = undefined;
    this.contentService.loadFirstFivePosts().subscribe(posts => this.posts = posts);
   }
}
