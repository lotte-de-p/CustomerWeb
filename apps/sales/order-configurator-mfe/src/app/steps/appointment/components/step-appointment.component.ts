import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EventFacade } from '@sales/events/data-access';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { StepComponent } from '@sales/shared/data-access';
import { Observable, of } from 'rxjs';
import { AsyncPipe, NgClass, NgTemplateOutlet } from '@angular/common';
import { AssetService } from '@telenet/ng-lib-page';
import { stepImage } from '../config/config';
import { ViewModel } from '../interfaces/view-model.interface';
import { stepLoaded } from '../events/step-loaded.const';

@Component({
  selector: 'tg-sales-order-configurator-step-appointment',
  standalone: true,
  imports: [TranslateModule, InlineSVGModule, AsyncPipe, NgClass, NgTemplateOutlet],
  templateUrl: './step-appointment.component.html',
})
export class StepAppointmentComponent implements OnInit, StepComponent {
  viewModel: ViewModel | undefined;

  constructor(private readonly eventFacade: EventFacade) {
    this.viewModel = {
      stepImage: AssetService.getImagePath('HARDWARE_CHECKOUT', stepImage),
    };
  }

  ngOnInit() {
    this.eventFacade.triggerEvent(stepLoaded);
  }

  onNextStep(): Observable<boolean> {
    return of(true);
  }
}
