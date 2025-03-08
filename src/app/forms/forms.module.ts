import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { FormsRoutingModule } from './forms-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AbtDetailsComponent } from './about/abt-details/abt-details.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './login/student/student.component';
import { TeacherComponent } from './login/teacher/teacher.component';
import { StafComponent } from './login/staf/staf.component';
import { StafFormComponent } from './login/staf/staf-form/staf-form.component';
import { TechFormComponent } from './login/teacher/tech-form/tech-form.component';
import { StudFormComponent } from './login/student/stud-form/stud-form.component';
import { SupportComponent } from './support/support.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    AbtDetailsComponent,
    LoginComponent,
    StudentComponent,
    TeacherComponent,
    StafComponent,
    StafFormComponent,
    TechFormComponent,
    StudFormComponent,
    SupportComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule, ReactiveFormsModule, HttpClientModule
  ],
  exports: [
    HomeComponent, AboutComponent, LoginComponent, SupportComponent
  ]
})
export class FormsModule { }
