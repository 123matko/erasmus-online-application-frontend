import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './_services/spinner.service';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private roles: string[] = [];
  isLoggedIn = false;
  showCoordinatorBoard = false;
  showTeacherBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService, public spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showCoordinatorBoard = this.roles.includes('ROLE_COORDINATOR');
      this.showTeacherBoard = this.roles.includes('ROLE_TEACHER');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
