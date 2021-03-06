import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { LocalStorage } from './injections-tokens';
import { AuthActivate } from '../guards/auth.activate';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor
    },
    {
      provide: LocalStorage,
      useValue: window.localStorage,
      useFactory: (platformId: Object) => {
        if(isPlatformBrowser(platformId)) {
          return window.localStorage;
        } 
        if(isPlatformServer(platformId)) {
          return class implements Storage{
            length = 0;
            private data: Record<string, string> = {}
            clear(): void {
              this.data = {};
            }
            getItem(key: string): string | null {
              return this.data[key]
            }
            key(index: number): string | null {
              throw new Error('Method not implemented.');
            }
            removeItem(key: string): void {
              const { [key]: removedItem, ...others } = this.data;
              this.data = others;
            }
            setItem(key: string, value: string): void {
              this.data[key] = value;
            }
          }
        }
        throw new Error('Not implemented')
      },
      deps: [PLATFORM_ID]
    },
    AuthActivate
  ]
})
export class CoreModule { 
 
}
