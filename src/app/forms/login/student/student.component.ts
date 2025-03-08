import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudDetailsService } from './stud-details.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {


  submittedData: any = null; // Holds submitted form data

  StudentForm: FormGroup = new FormGroup ({
    firstName: new FormControl('', [Validators.minLength(3), Validators.required]),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    DOB: new FormControl('', Validators.required)
  })

  constructor(private _StudDetailsService: StudDetailsService){}

onSubmit() {
  if (this.StudentForm.valid) {
    this.submittedData = this.StudentForm.value; 
     

    // Call API to store data
    this._StudDetailsService.addStudentDetails(this.submittedData).subscribe(
      response => {
        console.log('Data stored successfully:', response);
        alert('Student data saved successfully!'); // Confirmation alert
        this.StudentForm.reset(); // Reset form after submission
        this.submittedData = null; // Clear submitted data
      },
      error => {
        console.error('Error storing data:', error);
        alert('Failed to save student data!');
      }
    );
  }
}
  
}

