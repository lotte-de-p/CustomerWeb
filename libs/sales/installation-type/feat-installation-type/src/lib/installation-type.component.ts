import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AssetService } from '@telenet/ng-lib-page';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { StepComponent } from '@sales/shared/data-access';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'tg-sales-installation-type-feat-installation-type',
  standalone: true,
  imports: [CommonModule, TranslateModule, InlineSVGModule],
  templateUrl: './installation-type.component.html',
})
export class InstallationTypeComponent implements StepComponent {
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
