import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-sales-customer-registration-title',
  templateUrl: './customer-registration-title.component.html',
  standalone: true,
  imports: [TranslateModule],
})
export class CustomerRegistrationTitleComponent {
  @Input() currentStep: string | null = '';
}
