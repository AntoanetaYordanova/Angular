import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { HighlightDemoDirective } from './highlight-demo.directive';
import { TemplatesFormsDemoComponent } from './templates-forms-demo/templates-forms-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesDemoComponent,
    HighlightDemoDirective,
    TemplatesFormsDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
