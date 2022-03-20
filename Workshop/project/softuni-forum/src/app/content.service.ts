import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost, ITheme } from './shared/interfaces';

import { environment } from '../environments/environment';

const API_URL = environment.apiURL;

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) {};

  loadThemes(): Observable<ITheme[]>{
    return this.http.get<ITheme[]>(API_URL + '/api/themes');
  };

  loadPosts(): Observable<IPost[]>{
    return this.http.get<IPost[]>(API_URL + '/api/posts');
  }

  loadFirstFivePosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(API_URL + '/api/posts?limit=5');
  }

  loadTheme(id: string): Observable<ITheme> {
    return this.http.get<ITheme>(API_URL + '/api/themes/' + id);
  }
}
