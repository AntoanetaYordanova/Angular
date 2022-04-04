import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { LocalStorage } from '../core/injections-tokens';
import { IUser } from '../shared/interfaces';
import { environment } from '../../environments/environment';


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


}
