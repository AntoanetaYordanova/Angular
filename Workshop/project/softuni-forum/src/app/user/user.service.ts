import { Inject, Injectable } from '@angular/core';
import { LocalStorage } from '../core/injections-tokens';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: IUser | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(@Inject(LocalStorage) private localStorage: Window['localStorage']) {
    try {
      const localStorageUser = this.localStorage.getItem('<USER>') || 'Error'
      this.user = JSON.parse(localStorageUser);
    } catch (err) {
      this.user = undefined;
    }
  }

  login(email: string, password: string): void {
    this.user = {
      email,
      firstName: 'John',
      lastName: 'Doe',
    };

    this.localStorage.setItem('<USER>', JSON.stringify(this.user))
  }

  logout() {
    this.user = undefined;
    this.localStorage.removeItem('<USER>');
  }
}
