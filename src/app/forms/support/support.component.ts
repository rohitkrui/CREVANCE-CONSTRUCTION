import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {

  supportForm: FormGroup;

  constructor() {
    // Initialize the form with controls and validation
    this.supportForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

  // Submit handler
  onSubmit() {
    if (this.supportForm.valid) {
      console.log('Form Submitted:', this.supportForm.value);
      alert('Support request submitted successfully!');
      this.supportForm.reset(); // Reset the form after submission
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
