import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'customer-web-billing-payment-local-app',
  template: `<router-outlet></router-outlet>`,
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {}
