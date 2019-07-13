import { Injectable } from '@angular/core';
import { User } from './user';
import { Repo } from './repo';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });
});


@Injectable({
  providedIn: 'root'
})
export class SearchUserService {
  constructor(private http: HttpClient) { }

  getUsers(userName: string): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl + '/users/' + userName);
  }

  getRepos(userName: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(environment.apiUrl + '/users/' + userName + '/repos');
  }
}
