import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EventFacade } from '@sales/events/data-access';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { StepComponent } from '@sales/shared/data-access';
import { Observable, of } from 'rxjs';
import { AsyncPipe, NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { AssetService } from '@telenet/ng-lib-page';
import { stepImage } from '../config/config';
import { ViewModel } from '../interfaces/view-model.interface';
import { stepLoaded } from '../events/step-loaded.const';
import { OrderConfiguratorFacade } from '@sales/order-configurator/order-configurator-data-access';

@Component({
  selector: 'tg-sales-order-configurator-step-thanks',
  standalone: true,
  imports: [TranslateModule, InlineSVGModule, AsyncPipe, NgClass, NgTemplateOutlet, NgIf],
  templateUrl: './step-thanks.component.html',
})
export class StepThanksComponent implements OnInit, StepComponent {
  viewModel: ViewModel | undefined;

  constructor(
    private readonly eventFacade: EventFacade,
    private readonly orderConfiguratorFacade: OrderConfiguratorFacade
  ) {
    this.viewModel = {
      stepImage: AssetService.getImagePath('HARDWARE_CHECKOUT', stepImage),
      orderNumber$: this.orderConfiguratorFacade.orderNumber$,
    };
  }

  ngOnInit() {
    this.eventFacade.triggerEvent(stepLoaded);
  }

  onNextStep(): Observable<boolean> {
    return of(true);
  }

  onRedirectClick() {
    console.log('Thank you redirect clicked');
  }
}
