import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const ERASMUS_URL = 'http://localhost:8081/api/application/';

const PROFILE_KEY = 'profile';


@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  

  constructor(private http: HttpClient) { }

  getActiveCalls(): Observable<any>{
    return this.http.get(ERASMUS_URL + 'applicationCalls', { responseType: 'json' });
  }

  getProfileInfo():JSON|any{
    var profile = window.sessionStorage.getItem(PROFILE_KEY);
    return profile;
  }
}
