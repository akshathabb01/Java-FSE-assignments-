import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    { id: 101, name: 'Angular Framework', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 102, name: 'Data Structures & Algorithms', code: 'CS102', credits: 3, gradeStatus: 'failed' },
    { id: 103, name: 'Database Management Systems', code: 'CS103', credits: 3, gradeStatus: 'pending' },
    { id: 104, name: 'Cloud Computing Architecture', code: 'CS104', credits: 4, gradeStatus: 'passed' },
    { id: 105, name: 'Web Application Security', code: 'CS105', credits: 1, gradeStatus: 'pending' }
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }
}
