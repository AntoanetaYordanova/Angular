import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemesComponent } from './themes/themes.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeRoutingModule } from './theme.routing.module';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewThemeComponent,
    ThemesComponent,
    ThemeComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    SharedModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: []
})
export class ThemeModule { }
