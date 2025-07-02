import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopupComponent } from '@base-payments/topup/feature-topup';

@Component({
  selector: 'tg-base-payments-topup-root',
  standalone: true,
  template: `
    <div class="app-container">
      <tg-base-payments-topup></tg-base-payments-topup>
      <h1>Welcome to TopupMfe!</h1>
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
  imports: [RouterOutlet, TopupComponent],
})
export class AppComponent {}
