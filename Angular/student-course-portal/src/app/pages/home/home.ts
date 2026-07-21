import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course';
import { EnrollmentService } from '../../services/enrollment';
import { CourseListComponent } from '../course-list/course-list';
import { NotificationComponent } from '../../components/notification/notification';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseListComponent, NotificationComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = 'Angular';
  coursesCount = 0;

  constructor(
    private courseService: CourseService,
    public enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    // Reads live count from CourseService
    this.coursesCount = this.courseService.getCourses().length;
  }

  // Adds a course dynamically to demonstrate singleton state
  addSampleCourse(): void {
    const newId = 100 + this.courseService.getCourses().length + 1;
    this.courseService.addCourse({
      id: newId,
      name: `Advanced Topic ${newId}`,
      code: `CS${newId}`,
      credits: 3,
      gradeStatus: 'pending'
    });
    this.coursesCount = this.courseService.getCourses().length;
  }

  onEnrollClick(): void {
    this.message = 'Enrollment process initiated!';
  }
}
