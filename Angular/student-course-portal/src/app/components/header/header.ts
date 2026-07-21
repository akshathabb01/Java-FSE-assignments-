import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // Must be included here!
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {}
