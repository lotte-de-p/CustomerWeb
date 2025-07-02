import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule],
  selector: 'care-service-case-error',
  templateUrl: './service-case-error.component.html',
})
export class ServiceCaseErrorComponent {
  @Input() error: string | null;
}
