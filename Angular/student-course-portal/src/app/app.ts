import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',  // Changed from ./app.component.html
  styleUrl: './app.css'       // Changed from ./app.component.css
})
export class AppComponent {
  title = 'student-course-portal';
}
