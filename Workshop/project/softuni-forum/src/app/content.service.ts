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
    return this.http.get<ITheme[]>(API_URL + '/themes');
  };

  loadPosts(): Observable<IPost[]>{
    return this.http.get<IPost[]>(API_URL + '/posts');
  }

  loadFirstFivePosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(API_URL + '/posts?limit=5');
  }

  loadTheme(id: string): Observable<ITheme> {
    return this.http.get<ITheme>(API_URL + '/themes/' + id);
  }

  addTheme(data: {themeName: string, postText: string}): Observable<Object>{
    return this.http.post(`${API_URL}/themes`, data, { withCredentials : true });
  }
}
