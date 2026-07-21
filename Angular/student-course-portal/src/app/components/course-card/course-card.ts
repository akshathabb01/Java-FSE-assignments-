import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

// Updated imports to match your exact file names
import { HighlightDirective } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number | null;
  isEnrolled?: boolean;
  gradeStatus: 'passed' | 'failed' | 'pending';
}

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded: boolean = false;

  get cardClasses() {
    return {
      'card--enrolled': !!this.course?.isEnrolled,
      'card--full': (this.course?.credits ?? 0) >= 4,
      'expanded': this.isExpanded
    };
  }

  get cardStyle() {
    let borderColor = '#9ca3af';
    if (this.course?.gradeStatus === 'passed') borderColor = '#16a34a';
    if (this.course?.gradeStatus === 'failed') borderColor = '#dc2626';

    return {
      'border-left': `6px solid ${borderColor}`
    };
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CourseCard input changed:', changes);
  }

  onEnroll(): void {
    this.enrollRequested.emit(this.course.id);
  }
}
