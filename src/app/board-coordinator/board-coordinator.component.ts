import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-coordinator',
  templateUrl: './board-coordinator.component.html',
  styleUrls: ['./board-coordinator.component.css']
})
export class BoardCoordinatorComponent implements OnInit {

  content?: string;

  constructor(private userService: UserService) { }
  

  ngOnInit(): void {
    this.userService.getCoordinatorBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
