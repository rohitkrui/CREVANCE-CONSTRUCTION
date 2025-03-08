import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudDetailsService {

  // private myApiUrl = 'https://construction-data-ea0b8-default-rtdb.firebaseio.com/tasks.json';
  private myApiUrl = 'https://construction-data-ea0b8-default-rtdb.firebaseio.com/studentsss.json';

  constructor(private myHttpPOST: HttpClient) { }

  //--- defining the POST Method
  addStudentDetails(studentDetails: any) {
     return this.myHttpPOST.post(this.myApiUrl, studentDetails)
  }


   // GET method to fetch all student details
   getStudents(): Observable<any> {
    return this.myHttpPOST.get(this.myApiUrl);
  }
}