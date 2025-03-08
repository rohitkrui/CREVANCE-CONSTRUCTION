import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SupportComponent } from './support/support.component';
import { AbtDetailsComponent } from './about/abt-details/abt-details.component';
import { StudentComponent } from './login/student/student.component';
import { StudFormComponent } from './login/student/stud-form/stud-form.component';
import { TeacherComponent } from './login/teacher/teacher.component';
import { TechFormComponent } from './login/teacher/tech-form/tech-form.component';
import { StafComponent } from './login/staf/staf.component';
import { StafFormComponent } from './login/staf/staf-form/staf-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  
//----------------------------------------------------------------------------------------
  {path: 'about', component: AboutComponent,
    children: [
      {path: 'details', component: AbtDetailsComponent}
    ]
  },
//--------------------------------------------------------------------------------------
  {path: 'login', component: LoginComponent,            //--main  login Path
    children: [
      {path: 'student', component: StudentComponent,    //--Student child path
        children: [
          {path: 'studForm', component: StudFormComponent}   //--Student-Sub child path
        ] },

      {path: 'teacher', component: TeacherComponent,    //-- teacher child path
        children: [
          {path: 'teachForm', component: TechFormComponent}  //--teacher-Sub child path
        ] },

      {path: 'staf', component: StafComponent,            //---staf child path
        children: [
          {path: 'stafForm', component: StafFormComponent}  //--staf sub child path
        ] }
    ],

  },
  //------------------------------------------------------------------------------------

  {path: 'support', component: SupportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
