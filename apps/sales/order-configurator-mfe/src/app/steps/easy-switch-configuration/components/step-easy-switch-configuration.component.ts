import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EventFacade } from '@sales/events/data-access';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { StepComponent } from '@sales/shared/data-access';
import { Observable, of } from 'rxjs';
import { AsyncPipe, NgClass, NgTemplateOutlet } from '@angular/common';
import { stepLoaded } from '../events/step-loaded.const';
import { stepImagePath } from '../config/config';

@Component({
  selector: 'tg-sales-order-configurator-step-easy-switch',
  standalone: true,
  imports: [TranslateModule, InlineSVGModule, AsyncPipe, NgClass, NgTemplateOutlet],
  templateUrl: './step-easy-switch-configuration.component.html',
})
export class StepEasySwitchConfigurationComponent implements OnInit, StepComponent {
  constructor(private readonly eventFacade: EventFacade) {}

  ngOnInit() {
    this.eventFacade.triggerEvent(stepLoaded);
  }

  onNextStep(): Observable<boolean> {
    return of(true);
  }

  protected readonly stepImagePath = stepImagePath;
}
