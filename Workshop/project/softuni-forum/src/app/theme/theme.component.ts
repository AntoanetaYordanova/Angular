import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { IPost, ITheme } from '../shared/interfaces';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {
  posts: IPost[] | undefined;

  constructor(private contentService: ContentService) {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.posts = undefined;
    this.contentService.loadPosts().subscribe(posts => this.posts = posts);
   }
}
