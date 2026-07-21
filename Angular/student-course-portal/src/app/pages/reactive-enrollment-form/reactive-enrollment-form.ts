import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ComponentCanDeactivate } from '../../guards/unsaved-changes-guard';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentFormComponent implements OnInit, ComponentCanDeactivate {
  enrollForm!: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      courseId: ['', Validators.required],
      comments: [''],
      additionalCourses: this.fb.array([])
    });
  }

  // Getter for additionalCourses FormArray
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  // Get individual FormControl from additionalCourses FormArray
  getCourseControl(index: number): FormControl {
    return this.additionalCourses.at(index) as FormControl;
  }

  // Add dynamic course input
  addCourse(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  // Remove dynamic course input
  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  // Hands-On 7: CanDeactivate Guard implementation
  canDeactivate(): boolean {
    if (this.enrollForm && this.enrollForm.dirty && !this.isSubmitted) {
      return window.confirm('You have unsaved changes. Leave?');
    }
    return true;
  }

  onSubmit(): void {
    if (this.enrollForm.valid) {
      this.isSubmitted = true;
      console.log('Form Submitted Successfully:', this.enrollForm.value);
    } else {
      this.enrollForm.markAllAsTouched();
    }
  }

  resetForm(): void {
    this.enrollForm.reset();
    this.additionalCourses.clear();
    this.isSubmitted = false;
  }
}
