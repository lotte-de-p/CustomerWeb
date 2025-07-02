import { Component } from '@angular/core';
import { CustomerRegistrationComponent } from '../app/customer-registration.component';

@Component({
  selector: 'tg-sales-customer-registration-local',
  templateUrl: './customer-registration-local.html',
  imports: [CustomerRegistrationComponent],
  standalone: true,
})
export class CustomerRegistrationLocalComponent {
  title = 'customer-registration';
}
