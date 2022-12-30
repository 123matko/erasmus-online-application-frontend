import {Component, OnInit} from '@angular/core';

import {ApplicationService} from '../_services/application.service';

import {FormBuilder, FormControl, FormGroup, FormArray} from '@angular/forms';


const PROFILE_KEY = 'profile';
const dictionary = new Map<string, string>();
dictionary.set("Slovenská", "Slovak");
dictionary.set("Maďarská", "Hungarian");
dictionary.set("Česká", "Czech");
dictionary.set("Nemecká", "German");
dictionary.set("Ukrajinská", "Ukrainian");
dictionary.set("Ruská", "Russian");
dictionary.set("Poľská", "Polish");
dictionary.set("Srbská", "Serbian");

@Component({selector: 'app-app-form', templateUrl: './student-form.component.html', styleUrls: ['./student-form.component.css']})
export class AppFormComponent implements OnInit {
    applicationPage = 0;


    languagesTableForm : any;
    universitiesTableForm : any;
    rowsCount : number = 3;

    universitiesList;
    Sex = ["Male", "Female",];

    levels = [
        {
            name: 'A1'
        },
        {
            name: 'A2'
        },
        {
            name: 'B1'
        },
        {
            name: 'B2'
        }, {
            name: 'C1'
        }, {
            name: 'C2'
        },
    ];

    form : any = {
        firstname: null,
        lastname: null,
        address: null,
        telnumber: null,
        dateofbirth: null,
        placeofbirth: null,
        nationality: null,
        mothertongue: null,
        sex: null,
        prevStudy: null,
        prevStudyFrom: null,
        prevStudyTo: null,
        prevTraineeFrom: null,
        prevTrainee: null,
        prevTraineeTo: null,
        cv: null,
        coverLetter: null,
        languageCertificate: null
    };
    profile?: any;
    mobility?: any;

    get Languages() {
        return this.languagesTableForm.get('Languages')as FormArray;
    }

    get Universities() {
        return this.universitiesTableForm.get('Universities')as FormArray;
    }

    constructor(private fb : FormBuilder, private applicationService : ApplicationService) {}


    ngOnInit(): void {
        this.applicationService.getUniversities().subscribe(data => {
            this.universitiesList = data.list;
        });
        this.profile = JSON.parse(window.sessionStorage.getItem(PROFILE_KEY));
        console.log(this.profile);
        this.mobility = "2023/2024";
        this.form.firstname = this.profile.firstname;
        this.form.lastname = this.profile.lastname;
        this.form.address = this.profile.address;
        this.form.telnumber = "+421" + this.profile.telNumber;
        this.form.dateofbirth = this.profile.dateOfBirth.split(" ")[0];
        this.form.placeofbirth = this.profile.placeOfBirth;
        this.form.nationality = dictionary.get(this.profile.nationality);

        console.log(this.form);

        this.languagesTableForm = this.fb.group({Languages: this.fb.array([])});
        for (let i = 0; i < this.rowsCount; i++) {
            this.Languages.push(this.fb.group({Language: new FormControl(), LevelOfCompetance: new FormControl()}));
        }
        this.universitiesTableForm = this.fb.group({Universities: this.fb.array([])});
        for (let i = 0; i < this.rowsCount; i++) {
            this.Universities.push(this.fb.group({
                University: new FormControl(),
                StudyPeriodFrom: new FormControl(),
                StudyPeriodTo: new FormControl(),
                DurationOfStay: new FormControl(),
                NumberOfCredits: new FormControl()
            }));
        }


    }

    onChange(value : string) {
        console.log(value);

        this.form.sex = value;
    }

    prevPage(): void {
        if (this.applicationPage > 0) {
            this.applicationPage --;
        }
    }
    nextPage(): void {
        if (this.applicationPage < 2) {
            this.applicationPage ++;
        }
    }

    calculateDiff(fromDate, toDate) {
        var date1: any = new Date(fromDate);
        var date2: any = new Date(toDate);
        var diffDays: any = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24 * 30));

        return diffDays;
    }

    onSubmit(): void {
        var {
            firstname,
            lastname,
            address,
            telnumber,
            dateofbirth,
            placeofbirth,
            nationality,
            mothertongue,
            sex,
            prevStudy,
            prevStudyFrom,
            prevStudyTo,
            prevTraineeFrom,
            prevTrainee,
            prevTraineeTo
        } = this.form;

        var universities = [
            {
                institution: this.universitiesTableForm.value.Universities[0].University.name,
                country: this.universitiesTableForm.value.Universities[0].University.country,
                studyPeriodFrom: this.universitiesTableForm.value.Universities[0].StudyPeriodFrom,
                studyPeriodTo: this.universitiesTableForm.value.Universities[0].StudyPeriodTo,
                durationOfStay: this.calculateDiff(this.universitiesTableForm.value.Universities[0].StudyPeriodFrom, this.universitiesTableForm.value.Universities[0].StudyPeriodTo),
                numberOfCredits: this.universitiesTableForm.value.Universities[0].NumberOfCredits
            }, {
              institution: this.universitiesTableForm.value.Universities[1].University.name,
                country: this.universitiesTableForm.value.Universities[1].University.country,
                studyPeriodFrom: this.universitiesTableForm.value.Universities[1].StudyPeriodFrom,
                studyPeriodTo: this.universitiesTableForm.value.Universities[1].StudyPeriodTo,
                durationOfStay: this.calculateDiff(this.universitiesTableForm.value.Universities[1].StudyPeriodFrom, this.universitiesTableForm.value.Universities[1].StudyPeriodTo),
                numberOfCredits: this.universitiesTableForm.value.Universities[1].NumberOfCredits
            }, {
              institution: this.universitiesTableForm.value.Universities[2].University.name,
                country: this.universitiesTableForm.value.Universities[2].University.country,
                studyPeriodFrom: this.universitiesTableForm.value.Universities[2].StudyPeriodFrom,
                studyPeriodTo: this.universitiesTableForm.value.Universities[2].StudyPeriodTo,
                durationOfStay: this.calculateDiff(this.universitiesTableForm.value.Universities[2].StudyPeriodFrom, this.universitiesTableForm.value.Universities[2].StudyPeriodTo),
                numberOfCredits: this.universitiesTableForm.value.Universities[2].NumberOfCredits
            }
        ];

        var languages = [
            {
                language: this.languagesTableForm.value.Languages[0].Language,
                level: this.languagesTableForm.value.Languages[0].LevelOfCompetance
            }, {
                language: this.languagesTableForm.value.Languages[1].Language?this.languagesTableForm.value.Languages[1].Language:"",
                level: this.languagesTableForm.value.Languages[1].LevelOfCompetance?this.languagesTableForm.value.Languages[1].LevelOfCompetance:""
            }, {
                language: this.languagesTableForm.value.Languages[2].Language?this.languagesTableForm.value.Languages[2].Language:"",
                level: this.languagesTableForm.value.Languages[2].LevelOfCompetance?this.languagesTableForm.value.Languages[2].LevelOfCompetance:""
            }
        ];


        var {
            profileNumber,
            title,
            email,
            degree,
            faculty,
            studyProgramme,
            studyAverage,
            yearOfStudy
        } = this.profile;


        var jsonBody = {
          languages,
            universities,
            title,
            profileNumber,
            email,
            degree,
            faculty,
            studyProgramme,
            studyAverage,
            yearOfStudy,
            firstname,
            lastname,
            address,
            telnumber,
            dateofbirth,
            placeofbirth,
            nationality,
            mothertongue,
            sex,
            prevStudy,
            prevStudyFrom,
            prevStudyTo,
            prevTraineeFrom,
            prevTrainee,
            prevTraineeTo           
        };
        console.log(jsonBody);
        console.log(JSON.stringify(jsonBody));
        var result = this.applicationService.addApplication(jsonBody);
        var resultText;
        result.subscribe(data =>{
          resultText=data;
        })
        console.log("result of post: "+ resultText);
        
    }

}
