import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'tg-engagement-telenet-customerzone-dashboard-root',
  standalone: true,
  template: `
    <div class="app-container">
      <h1>Welcome to TelenetCustomerzoneDashboardMfe!</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      .app-container {
        padding: 20px;
        height: 100%;
        background-color: #eae9e2;
      }
    `,
  ],
  imports: [RouterOutlet],
})
export class AppComponent {}
