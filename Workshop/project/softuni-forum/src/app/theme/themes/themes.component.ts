import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { IPost } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent{

  posts: IPost[] | undefined;

  constructor(private contentService: ContentService) {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.posts = undefined;
    this.contentService.loadPosts().subscribe(posts => this.posts = posts);
   }

}
