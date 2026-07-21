import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course';
import { CourseCardComponent } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  isLoading = true;
  searchTerm = '';

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Pull courses from service
    this.courses = this.courseService.getCourses();

    // Step 71: Check URL query params on load (?search=...)
    const querySearch = this.route.snapshot.queryParamMap.get('search');
    if (querySearch) {
      this.searchTerm = querySearch;
      this.filterCourses();
    } else {
      this.filteredCourses = [...this.courses];
    }

    this.isLoading = false;
  }

  // Step 71: Triggered live on every keypress
  onSearchChange(): void {
    const cleanSearch = this.searchTerm.trim();

    // Update URL parameter in address bar
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: cleanSearch || null },
      queryParamsHandling: 'merge'
    });

    this.filterCourses();
  }

  filterCourses(): void {
    const query = this.searchTerm.trim().toLowerCase();

    if (!query) {
      this.filteredCourses = [...this.courses];
      return;
    }

    this.filteredCourses = this.courses.filter(course =>
      course.name.toLowerCase().includes(query) ||
      course.code.toLowerCase().includes(query)
    );
  }

  // Step 70: Card click navigation to /courses/:id
  goToDetail(courseId: number): void {
    this.router.navigate(['/courses', courseId]);
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}
