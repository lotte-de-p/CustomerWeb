import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { UntilDestroy } from '@ngneat/until-destroy';

@Component({
  selector: 'tg-order-configurator-easy-switch-ui-switch-selection-checkmarks',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './easy-switch-selection-checkmarks.component.html',
})
@UntilDestroy()
export class EasySwitchSelectionCheckmarksComponent {
  @Input() labels: string[] = [];
}
