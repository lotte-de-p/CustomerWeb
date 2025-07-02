import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'tg-order-configurator-easy-switch-ui-switch-selection-option',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule],
  templateUrl: './easy-switch-selection-option.component.html',
})
@UntilDestroy()
export class EasySwitchSelectionOptionComponent {
  @Input() label = '';
  @Input() heading = '';
  @Input() badgeText: string | null = null;
}
