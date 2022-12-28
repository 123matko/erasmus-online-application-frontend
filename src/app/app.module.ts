import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardCoordinatorComponent } from './board-coordinator/board-coordinator.component';
import { BoardTeacherComponent } from './board-teacher/board-teacher.component';
import { BoardStudentComponent } from './board-student/board-student.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AppFormComponent } from './app-form/app-form.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    BoardCoordinatorComponent,
    BoardTeacherComponent,
    BoardStudentComponent,
    AppFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
