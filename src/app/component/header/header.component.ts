import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchTerm: string = '';

  constructor(private router: Router) {}

  onSearch(): void {
    if (this.searchTerm) {
      this.router.navigate(['/search'], { queryParams: { q: this.searchTerm } });
    }
  }
}
