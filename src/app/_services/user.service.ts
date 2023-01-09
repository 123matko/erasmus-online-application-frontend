import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { ProfileComponent } from '../profile/profile.component';

const MAIS_URL = 'https://erasmus-mobility-fakemais.azurewebsites.net/api/test/';
//const MAIS_URL = 'http://localhost:8080/api/test/';
const USER_KEY = 'auth-user';
const PROFILE_KEY = 'profile';
var profile = null;
var replacer = function(key, value) {

  if (key instanceof Date) {
     return value.toUTCString();
  }
  
  return value;
}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = window.sessionStorage.getItem(USER_KEY);
  parsedUser = this.user?JSON.parse(this.user):[];
  constructor(private http: HttpClient) { }

  saveProfile(profile:any): void{
    console.log(profile);
    window.sessionStorage.setItem(PROFILE_KEY, JSON.stringify(profile.object,replacer));
  }

  getProfile(id:any):JSON|any{
    console.log(id);
    profile = this.http.post(MAIS_URL + 'profile/',{id} ,httpOptions); 
    console.log(profile) 
    return profile;
  }

  

  getStudentBoard(): JSON|any {
    console.log(this.parsedUser.id);
    var id =this.parsedUser.id;
    profile = this.http.post(MAIS_URL + 'profile/',{id} ,httpOptions);
     
    return profile;
  }

  getTeacherBoard(): Observable<any> {
    return this.http.get(MAIS_URL + 'teacher', { responseType: 'text' });
  }

  getCoordinatorBoard(): Observable<any> {
    return this.http.get(MAIS_URL + 'coordinator', { responseType: 'text' });
  }
}
