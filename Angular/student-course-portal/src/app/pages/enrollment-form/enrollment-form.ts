import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import FormsModule for ngModel & ngForm
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentFormComponent {
  // Form Model
  enrollmentData = {
    studentName: '',
    studentEmail: '',
    courseId: null,
    preferredSemester: 'Odd',
    agreeToTerms: false
  };

  isSubmitted = false; // Step 46

  // Step 40: Handle form submission
  onSubmit(form: NgForm): void {
    console.log('Form Value:', form.value);
    console.log('Form Valid:', form.valid);

    if (form.valid) {
      this.isSubmitted = true; // Step 46
    }
  }
}
