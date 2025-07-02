import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-sales-contact-customer-service',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contact-customer-service.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactCustomerServiceComponent {}
