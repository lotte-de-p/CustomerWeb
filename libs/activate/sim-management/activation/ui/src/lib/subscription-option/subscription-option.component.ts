import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AccountType } from '@sim-management/data-access';

@Component({
  selector: 'tg-activate-sim-management-activation-ui-subscription-option',
  templateUrl: './subscription-option.component.html',
  imports: [ReactiveFormsModule, TranslateModule],
  standalone: true,
})
export class SimManagementSubscriptionOptionComponent {
  @Input() form: FormGroup;
  @Input() isSubmitted: boolean;
  @Input() accountType: AccountType;
  @Input() label: string;

  get AccountType() {
    return AccountType;
  }
}
