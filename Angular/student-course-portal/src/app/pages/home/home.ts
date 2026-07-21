import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from '../course-list/course-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseListComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = 'Angular';

  onEnrollClick(): void {
    this.message = 'Enrollment process initiated!';
  }
}
