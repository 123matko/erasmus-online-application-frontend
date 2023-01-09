import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const ERASMUS_URL = 'https://erasmus-mobility-backend.azurewebsites.net/api/application/';
//const ERASMUS_URL = 'http://localhost:8081/api/application/';

const PROFILE_KEY = 'profile';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  

  constructor(private http: HttpClient) { }

  getUniversities(): Observable<any>{
    var profile = JSON.parse(window.sessionStorage.getItem(PROFILE_KEY));
    var faculty = profile.faculty;
    var studyProgramme = profile.studyProgramme;
    return this.http.post(ERASMUS_URL+'universities',{faculty,studyProgramme},httpOptions);
  }

  getActiveCalls(): Observable<any>{
    return this.http.get(ERASMUS_URL + 'applicationCalls', { responseType: 'json' });
  }

  getProfileInfo():JSON|any{
    var profile = window.sessionStorage.getItem(PROFILE_KEY);
    return profile;
  }

  addApplication(body:any): Observable<any>{
    return this.http.post(ERASMUS_URL+'addAplication',body,httpOptions);
  }
}
