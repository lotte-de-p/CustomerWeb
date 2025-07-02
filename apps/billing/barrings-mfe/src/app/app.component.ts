import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-customer-web-billing-barrings-local-app',
  templateUrl: './app.component.html',
  imports: [RouterOutlet],
})
export class AppComponent {
  title = 'customer-web-billing-barrings-mfe';
}
