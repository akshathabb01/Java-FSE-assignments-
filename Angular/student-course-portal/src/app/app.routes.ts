import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CoursesLayoutComponent } from './pages/courses-layout/courses-layout';
import { CourseListComponent } from './pages/course-list/course-list';
import { CourseDetailComponent } from './pages/course-detail/course-detail';
import { StudentProfile } from './pages/student-profile/student-profile';
import { NotFoundComponent } from './pages/not-found/not-found';
import { authGuard } from './guards/auth-guard';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'courses',
    component: CoursesLayoutComponent,
    children: [
      { path: '', component: CourseListComponent },
      { path: ':id', component: CourseDetailComponent }
    ]
  },

  {
    path: 'profile',
    component: StudentProfile,
    canActivate: [authGuard]
  },

  // Points to your actual folder 'reactive-enrollment-form'
  {
    path: 'enroll-reactive',
    loadComponent: () =>
      import('./pages/reactive-enrollment-form/reactive-enrollment-form').then(
        m => m.ReactiveEnrollmentFormComponent
      ),
    canDeactivate: [unsavedChangesGuard]
  },

  { path: '**', component: NotFoundComponent }
];
