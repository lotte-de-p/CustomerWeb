import { StepComponent } from '@sales/shared/data-access';
import { Component, OnInit } from '@angular/core';
import { take, Observable, of } from 'rxjs';
import { EventFacade, hideNavigationEvent } from '@sales/events/data-access';
import { thankYouStepLoaded } from './events/thank-you-step-loaded.const';
import { ThankYouFacade } from '@sales/thank-you/data-access';
import { AsyncPipe, CommonModule } from '@angular/common';
import { AssetService } from '@telenet/ng-lib-page';
import { stepImage, stepMobileImage } from './constants/thank-you-event-step-key.const';
import { ViewModel } from './interfaces/view-model.interface';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg-2';

@Component({
  standalone: true,
  imports: [AsyncPipe, CommonModule, TranslateModule, InlineSVGModule],
  selector: 'tg-sales-thank-you',
  templateUrl: './thank-you-step.component.html',
})
export class ThankYouStepComponent implements StepComponent, OnInit {
  viewModel: ViewModel;

  constructor(
    private readonly eventFacade: EventFacade,
    private readonly thankYouFacade: ThankYouFacade
  ) {
    this.viewModel = {
      stepImage: AssetService.getImagePath('HARDWARE_CHECKOUT', stepImage),
      stepMobileImage: AssetService.getImagePath('HARDWARE_CHECKOUT', stepMobileImage),
      orderNumber$: this.thankYouFacade.orderNumber$,
    };
  }

  ngOnInit(): void {
    this.eventFacade.triggerEvent(thankYouStepLoaded);
    this.eventFacade.triggerEvent(hideNavigationEvent);
  }

  onNextStep(): Observable<boolean> {
    return of(false);
  }

  onRedirectClick(): void {
    this.thankYouFacade.redirect().pipe(take(1)).subscribe();
  }
}
