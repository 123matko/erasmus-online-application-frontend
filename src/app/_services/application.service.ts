import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const PROFILE_KEY = 'profile';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  

  constructor(private http: HttpClient) { }

  getProfileInfo():JSON|any{
    var profile = window.sessionStorage.getItem(PROFILE_KEY);
    return profile;
  }
}
