import { Component, OnInit } from '@angular/core';
import { StudDetailsService } from '../student/stud-details.service';

@Component({
  selector: 'app-staf',
  templateUrl: './staf.component.html',
  styleUrls: ['./staf.component.css']
})
export class StafComponent implements OnInit{
 studentGetDetails: any[] = [];

  constructor(private _StudDetailsService: StudDetailsService){}

  ngOnInit(){
      this.fetchStudents(); 
  }

  fetchStudents() {
    this._StudDetailsService.getStudents().subscribe(
      (response) => {
        if (response) {
          this.studentGetDetails = Object.values(response); // Convert Firebase object to array
        } else {
          this.studentGetDetails = [];
        }
        console.log('Fetched Students:', this.studentGetDetails);
      },
      (error) => {
        console.error('Error fetching student data:', error);
      }
    );
  }
}