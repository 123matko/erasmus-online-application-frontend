import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../_services/spinner.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;

  constructor(private token: TokenStorageService, public spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.token.getUser());
  }

}
