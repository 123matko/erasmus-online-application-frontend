import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-student',
  templateUrl: './board-student.component.html',
  styleUrls: ['./board-student.component.css']
})


export class BoardStudentComponent implements OnInit {

  content?: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getStudentBoard().subscribe(
      data => {
        this.content = data.object;
        console.log("getStudentBoard-")
        console.log(data.object);
        this.userService.saveProfile(data);
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
