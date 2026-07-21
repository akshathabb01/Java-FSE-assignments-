import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div style="text-align: center; padding: 4rem 2rem;">
      <h1 style="font-size: 4rem; color: #dc2626; margin-bottom: 0.5rem;">404</h1>
      <h2>Page Not Found</h2>
      <p style="color: #64748b; margin-bottom: 1.5rem;">The page you are looking for does not exist.</p>
      <a routerLink="/" style="background: #2563eb; color: white; padding: 0.6rem 1.2rem; border-radius: 6px; text-decoration: none;">Return Home</a>
    </div>
  `
})
export class NotFoundComponent {}
