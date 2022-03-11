import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repo, User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  userProfile!: User;
  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`https://api.github.com/users/${username}`);
  }

  getRepo(url: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(url);
  }
}
