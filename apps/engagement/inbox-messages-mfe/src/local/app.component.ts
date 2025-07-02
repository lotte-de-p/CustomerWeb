import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'tg-inbox-messages-root',
  template: `
    <div class="app-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      .app-container {
        padding: 20px;
        background-color: #eae9e2;
      }
    `,
  ],
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {}
