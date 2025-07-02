import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from '@sales/shared/data-access';
import { Observable, of } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { AssetService } from '@telenet/ng-lib-page';
import { InlineSVGModule } from 'ng-inline-svg-2';

@Component({
  selector: 'tg-sales-appointment-feat-appointment',
  standalone: true,
  imports: [CommonModule, TranslateModule, InlineSVGModule],
  templateUrl: './appointment.component.html',
})
export class AppointmentComponent implements StepComponent {
  viewModel: { stepImage: string };

  constructor() {
    this.viewModel = {
      stepImage: AssetService.getImagePath('HARDWARE_CHECKOUT', 'delivery.svg'),
    };
  }

  onNextStep(): Observable<boolean> {
    return of(true);
  }
}
