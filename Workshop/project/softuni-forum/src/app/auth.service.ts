import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from './shared/interfaces';

const apiURL = environment.apiURL;


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUser = new BehaviorSubject< IUser | undefined >(undefined);

  currentUser$ = this._currentUser.asObservable();

  constructor(private client: HttpClient) { }


  handleLogin(newUser: IUser) {
    console.log(newUser);
     this._currentUser.next(newUser);
   }
 
  //  register(userData: {username: string ,email: string, password: string, tel?: string}): Observable<IUser> {
  //    return this.client.post<IUser>(`${apiURL}/register`, userData, { withCredentials: true });
  //  }
 
  //  logout(userData): Observable<void> {
     
  //    this.client.post<void>(`${this.apiURL}/logout`)
  //  }
}
