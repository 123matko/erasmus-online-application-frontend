import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { ProfileComponent } from '../profile/profile.component';

const MAIS_URL = 'http://localhost:8080/api/test/';

const USER_KEY = 'auth-user';
const PROFILE_KEY = 'profile';
var profile = null;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = window.sessionStorage.getItem(USER_KEY);
  parsedUser = this.user?JSON.parse(this.user):[];
  constructor(private http: HttpClient) { }

  saveProfile(profile:any): void{
    console.log(profile);
    window.sessionStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  }

  getProfile(id:any):JSON|any{
    console.log(id);
    profile = this.http.get(MAIS_URL + 'profile/'+id, { responseType: 'json' });    
    return profile;
  }

  getStudentBoard(): JSON|any {
    console.log(this.parsedUser.id);
    profile = this.http.get(MAIS_URL + 'profile/'+this.parsedUser.id, { responseType: 'json' });
        
    return profile;
  }

  getTeacherBoard(): Observable<any> {
    return this.http.get(MAIS_URL + 'teacher', { responseType: 'text' });
  }

  getCoordinatorBoard(): Observable<any> {
    return this.http.get(MAIS_URL + 'coordinator', { responseType: 'text' });
  }
}
