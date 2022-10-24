import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardStudentComponent } from './board-student/board-student.component';
import { BoardTeacherComponent } from './board-teacher/board-teacher.component';
import { BoardCoordinatorComponent } from './board-coordinator/board-coordinator.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'student', component: BoardStudentComponent },
  { path: 'mod', component: BoardTeacherComponent },
  { path: 'admin', component: BoardCoordinatorComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
