import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryPersonalInfo } from '@sales/summary/data-access';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule],
  selector: 'tg-sales-summary-personal-info',
  templateUrl: './personal-info.component.html',
})
export class PersonalInfoComponent {
  @Input() personalInfo: SummaryPersonalInfo | undefined | null;
}
