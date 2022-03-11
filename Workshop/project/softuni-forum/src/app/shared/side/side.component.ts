import { Component, Input } from '@angular/core';
import { IPost } from '../interfaces';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss'],
})
export class SideComponent {
  @Input() title!: string;
  @Input() items: IPost[] | undefined;
}
