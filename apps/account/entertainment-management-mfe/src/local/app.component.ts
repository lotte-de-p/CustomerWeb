import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EntertainmentManagementComponent } from '@entertainment-management/feat-entertainment-management';

@Component({
  selector: 'tg-entertainment-management-app-wrapper',
  template: `
    <div class="app-container entertainment-management">
      <span>{{ title }}</span>
    </div>
    <router-outlet></router-outlet>
  `,
  imports: [EntertainmentManagementComponent, RouterOutlet, RouterModule],
  standalone: true,
})
export class AppComponent {
  title = 'entertainment-management-mfe title';
}
