import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent, Course } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {
  isLoading: boolean = true; // Step 25
  selectedCourseId: number | null = null;

  courses: Course[] = [
    { id: 101, name: 'Angular Framework', code: 'CS101', credits: 4, gradeStatus: 'passed', isEnrolled: true },
    { id: 102, name: 'Data Structures & Algorithms', code: 'CS102', credits: 3, gradeStatus: 'failed', isEnrolled: false },
    { id: 103, name: 'Database Management Systems', code: 'CS103', credits: 3, gradeStatus: 'pending', isEnrolled: false },
    { id: 104, name: 'Cloud Computing Architecture', code: 'CS104', credits: 4, gradeStatus: 'passed', isEnrolled: false },
    { id: 105, name: 'Web Application Security', code: 'CS105', credits: 1, gradeStatus: 'pending', isEnrolled: false }
  ];

  ngOnInit(): void {
    // Step 25: Simulate delay for loading state
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  // Step 26: trackBy function
  // trackBy helps Angular identify which items have changed, added, or removed.
  // Instead of re-rendering the entire DOM list on array changes, Angular re-uses existing elements and only updates modified ones.
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}
