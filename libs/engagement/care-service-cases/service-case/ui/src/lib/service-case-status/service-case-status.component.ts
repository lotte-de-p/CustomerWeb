import { Component, Input } from '@angular/core';
import { Status } from '@care-service-cases/service-case/data-access';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  templateUrl: './service-case-status.component.html',
  selector: 'care-service-case-status',
  imports: [NgClass, TranslateModule],
})
export class ServiceCaseStatusComponent {
  @Input() status: Status = Status.RESOLVED;
}
