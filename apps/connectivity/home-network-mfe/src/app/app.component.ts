import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'tg-connectivity-home-network-root',
  standalone: true,
  template: `
    <div class="app-container">
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
