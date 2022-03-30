import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { LocalStorage } from '../core/injections-tokens';
import { IUser } from '../shared/interfaces';
import { environment } from '../../environments/environment';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: any | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(
    @Inject(LocalStorage) private localStorage: Window['localStorage'],
    private client: HttpClient,
  ) {
    try {
      const localStorageUser = this.localStorage.getItem('<USER>') || 'Error'
      this.user = JSON.parse(localStorageUser);
    } catch (err) {
      this.user = undefined;
    }
  }

  login(userData: {email: string, password: string}): Observable<any> {
   return this.client
   .post(`${apiURL}/login`, userData, { withCredentials: true, observe : 'response' })
   .pipe(
    //  tap(response => console.log(response)),
     map(response => response.body),
     tap(user =>  user ? this.user = user : this.user = undefined
    ))
  }

  register(userData: {username: string ,email: string, password: string, tel?: string}): Observable<IUser> {
    return this.client.post<IUser>(`${apiURL}/register`, userData, { withCredentials: true });
  }

  logout() {
    this.user = undefined;
  }
}
