import { Component, OnInit } from '@angular/core';

import { ApplicationService } from '../_services/application.service';

const PROFILE_KEY = 'profile';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {
  form: any = {
    firstname: null,
    lastname: null,
    address: null,
    telnumber: null,
    dateofbirth: null,
    placeofbirth:null,
    nationality:null,
    mothertongue:null,
    languages:[]
  };
  profile?: any;
  mobility?:any;
  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.profile =  JSON.parse(window.sessionStorage.getItem(PROFILE_KEY));
    console.log(this.profile);
    this.mobility = "2023/2024";   
    this.form.firstname=this.profile.firstname; 
    this.form.lastname=this.profile.lastname; 
    this.form.address=this.profile.address; 
    this.form.telnumber="+421"+this.profile.telNumber; 
    this.form.dateofbirth= this.profile.dateOfBirth.split(" ")[0]; 
    this.form.placeofbirth=this.profile.placeOfBirth; 
    this.form.nationality=this.profile.nationality; 
    console.log(this.form);
  }

  onSubmit(): void {
    const { firstname,
      lastname,
      address,
      telnumber,
      dateofbirth,
      placeofbirth,
      nationality,
    mothertongue,
  languages} = this.form;

   
  }

}
