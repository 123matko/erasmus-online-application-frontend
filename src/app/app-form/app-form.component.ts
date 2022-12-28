import { Component, OnInit } from '@angular/core';

import { ApplicationService } from '../_services/application.service';

import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';

const PROFILE_KEY = 'profile';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {
  applicationPage = 0;

  languagesTableForm: any; 
  universitiesTableForm: any;
  rowsCount: number = 3;

  universitiesList=[
    {name: 'Paisii Hilendarski University of Plovdiv', country: 'Bulgaria'},
    {name: 'University of Eastern Finland', country: 'Finland'},
    {name: 'Universite de technologie de Belfort', country: 'France'},
    {name: 'University of the Peloponnese', country: 'Greece'},
    {name: 'Kaunas University of technology', country: 'Lithuania'},
    {name: 'Universidad de Málaga', country: 'Spain'},
    {name: 'Yildiz Technical University', country: 'Turkey'}
  ]

  levels = [
    {name: 'A1'},
    {name: 'A2'},
    {name: 'B1'},
    {name: 'B2'},
    {name: 'C1'},
    {name: 'C2'},
  ];

  form: any = {
    firstname: null,
    lastname: null,
    address: null,
    telnumber: null,
    dateofbirth: null,
    placeofbirth:null,
    nationality:null,
    mothertongue:null,
    prevStudy: false, 
  };
  profile?: any;
  mobility?:any;

  get Languages() {
    return this.languagesTableForm.get('Languages') as FormArray;
  }

  get Universities(){
    return this.universitiesTableForm.get('Universities') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  

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

    this.languagesTableForm = this.fb.group({
      Languages: this.fb.array([]),
    });
    for (let i = 0; i < this.rowsCount; i++) {
      this.Languages.push(
        this.fb.group({
          Language: new FormControl(),
          LevelOfCompetance: new FormControl(this.levels),
        })
      );
    }
    this.universitiesTableForm = this.fb.group({
      Universities: this.fb.array([]),
    });
    for (let i = 0; i < this.rowsCount; i++) {
      this.Universities.push(
        this.fb.group({
          University: new FormControl(this.universitiesList),
          StudyPeriodFrom: new FormControl(),
          StudyPeriodTo: new FormControl(),
          DurationOfStay: new FormControl(),
          NumberOfCredits: new FormControl()
        })
      );
    }


  }

  prevPage(): void{
    if(this.applicationPage>0){
      this.applicationPage--;
     }
  }
  nextPage(): void{
    if(this.applicationPage<2){
      this.applicationPage++;
     }
  }

  onSubmit(): void {
    const { firstname,
      lastname,
      address,
      telnumber,
      dateofbirth,
      placeofbirth,
      nationality,
    mothertongue,prevStudy} = this.form;
    const{ Languages} = this.languagesTableForm.value;
      console.log(Languages,firstname,
        lastname,
        address,
        telnumber,
        dateofbirth,
        placeofbirth,
        nationality,
      mothertongue, prevStudy);
   
  }

}
