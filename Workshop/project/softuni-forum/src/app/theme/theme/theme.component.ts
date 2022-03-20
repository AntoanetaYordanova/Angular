import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/content.service';
import { ITheme } from 'src/app/shared/interfaces';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {
  theme!: ITheme;
  thumbesUpIcon = faThumbsUp;
  tublesDownIcon = faThumbsDown;

  get isLogged(): boolean {
    return this.userService.isLogged
  };

  constructor(private contentService: ContentService, private route: ActivatedRoute, private userService: UserService) { 
    this.fetchPost();
  }

  fetchPost(): void{
    const { themeId } = this.route.snapshot.params;
    
    this.contentService.loadTheme(themeId).subscribe(theme => this.theme = theme);
  }
}
