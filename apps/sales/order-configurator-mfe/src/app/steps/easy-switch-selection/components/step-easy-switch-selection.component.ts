import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EventFacade } from '@sales/events/data-access';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { StepComponent } from '@sales/shared/data-access';
import { Observable, of } from 'rxjs';
import { AsyncPipe, NgClass, NgTemplateOutlet } from '@angular/common';
import { stepLoaded } from '../events/step-loaded.const';
import { stepImagePath } from '../config/config';
import { EasySwitchSelectionComponent } from '@sales/order-configurator/easy-switch/feat-choose-easy-switch';
import { EasySwitchFacade } from '@sales/order-configurator/easy-switch/domain';

@Component({
  selector: 'tg-sales-order-configurator-step-easy-switch-selection',
  standalone: true,
  imports: [TranslateModule, InlineSVGModule, AsyncPipe, NgClass, NgTemplateOutlet, EasySwitchSelectionComponent],
  templateUrl: './step-easy-switch-selection.component.html',
})
export class StepEasySwitchSelectionComponent implements OnInit, StepComponent {
  @ViewChild(EasySwitchSelectionComponent) easySwitchSelectionComponent!: EasySwitchSelectionComponent;

  constructor(
    private readonly eventFacade: EventFacade,
    private readonly easySwitchFacade: EasySwitchFacade
  ) {}

  ngOnInit() {
    this.eventFacade.triggerEvent(stepLoaded);
  }

  onNextStep(): Observable<boolean> {
    if (this.easySwitchSelectionComponent.isFormValid()) {
      this.easySwitchFacade.submitChoice(this.easySwitchSelectionComponent.easySwitchSelectionValue);
      return of(true);
    } else {
      this.easySwitchSelectionComponent.markFormAsSubmitted();
      return of(false);
    }
  }

  protected readonly stepImagePath = stepImagePath;
}
