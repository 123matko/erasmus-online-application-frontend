import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../_services/application.service';
import { UserService } from '../_services/user.service';
import {NavigationEnd, Router} from '@angular/router';
import { filter } from 'rxjs';

const USER_KEY = 'auth-user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userContent?: any;
  content?: any;
  isUserLoggedIn?:boolean;
  user = window.sessionStorage.getItem(USER_KEY);
  parsedUser = this.user?JSON.parse(this.user):[];
  constructor(private applicationService: ApplicationService, private userService: UserService) { 
  }

  ngOnInit(): void {
    
    this.userService.getStudentBoard().subscribe(
      data => {
        this.userContent = data;
        this.userService.saveProfile(this.userContent);
      },
      err => {
        this.userContent = JSON.parse(err.error).message;
      }
    );
    this.isUserLoggedIn=this.user?true:false;
    this.applicationService.getActiveCalls().subscribe(
      data => {
        console.log(data);
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
