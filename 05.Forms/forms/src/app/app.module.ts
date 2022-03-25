import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { HighlightDemoDirective } from './highlight-demo.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesDemoComponent,
    HighlightDemoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
