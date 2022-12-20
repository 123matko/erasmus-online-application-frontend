import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const API_URL = 'http://localhost:8080/api/test/';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = window.sessionStorage.getItem(USER_KEY);
  parsedUser = this.user?JSON.parse(this.user):[];
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getStudentBoard(): Observable<any> {
    console.log(this.parsedUser.id);
    return this.http.get(API_URL + 'profile/'+this.parsedUser.id, { responseType: 'json' });
  }

  getTeacherBoard(): Observable<any> {
    return this.http.get(API_URL + 'teacher', { responseType: 'text' });
  }

  getCoordinatorBoard(): Observable<any> {
    return this.http.get(API_URL + 'coordinator', { responseType: 'text' });
  }
}
