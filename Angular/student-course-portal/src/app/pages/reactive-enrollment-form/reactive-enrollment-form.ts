import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

// Step 53: Custom Synchronous Validator - Disallows course code starting with 'XX'
export function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = String(control.value || '').trim();
  if (value.startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

// Step 55: Custom Async Validator - Simulates API call to check if email is taken
export function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const email = String(control.value || '').toLowerCase();
      if (email.includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentFormComponent implements OnInit {
  enrollForm!: FormGroup;
  isSubmitted = false;

  // Step 49: Inject FormBuilder in the constructor
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Step 49: Define Form Structure
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      // Step 55: Async validator passed as 3rd argument
      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      // Step 53: Apply custom sync validator
      courseId: ['', [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      // Step 56: FormArray for dynamic additional courses
      additionalCourses: this.fb.array([])
    });
  }

  // Step 57: Typed getter for FormArray
  // EXPLANATION: Having a typed getter avoids repetitive type casting in the HTML template
  // (e.g., avoiding `(enrollForm.get('additionalCourses') as FormArray).controls`),
  // ensuring clean template syntax and full TypeScript type safety.
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  // Helper method to cast FormArray control as FormControl for type safety in template
  getCourseControl(index: number): FormControl {
    return this.additionalCourses.at(index) as FormControl;
  }

  // Step 56: Add new course control dynamically
  addCourse(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  // Step 56: Remove course control dynamically
  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  // Step 51 & 52: Submit Handling
  onSubmit(): void {
    if (this.enrollForm.valid) {
      this.isSubmitted = true;

      // Step 52: Difference between value and getRawValue()
      // `enrollForm.value`: Returns an object containing values of ALL ENABLED controls. Excludes disabled fields.
      // `enrollForm.getRawValue()`: Returns an object containing values of ALL controls, INCLUDING DISABLED ONES.
      console.log('enrollForm.value (enabled controls only):', this.enrollForm.value);
      console.log('enrollForm.getRawValue() (includes disabled controls):', this.enrollForm.getRawValue());
    }
  }

  resetForm(): void {
    this.enrollForm.reset({
      preferredSemester: 'Odd',
      agreeToTerms: false
    });
    this.additionalCourses.clear();
    this.isSubmitted = false;
  }
}
