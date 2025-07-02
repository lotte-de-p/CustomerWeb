import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { TgFormsModule } from '@telenet/ng-lib-form';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { ErrorViewModel } from '@sales/error/data-access';
import { EventFacade } from '@sales/events/data-access';
import { errorStepLoaded } from './error..constants';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule, TgFormsModule, InlineSVGModule],
  selector: 'tg-sales-error',
  templateUrl: './error.component.html',
})
export class ErrorComponent implements OnChanges {
  @Input() error: ErrorViewModel | undefined;

  constructor(
    private readonly urlService: UrlService,
    private readonly eventFacade: EventFacade
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    const error: ErrorViewModel = changes['error']?.currentValue;
    if (error) {
      this.eventFacade.triggerEvent(errorStepLoaded);
      this.eventFacade.triggerAnalyticsErrorEvent({
        name: 'error occurred',
        statusMessage: error.key,
        attributes: { itemName: error.description, itemGroup: error.apiRequest ?? undefined },
      });
    }
  }

  redirect() {
    this.eventFacade.triggerAnalyticsClickEvent({ name: 'contact button clicked' });
    if (this.error?.redirectUrl) {
      this.urlService.redirectTo(this.error?.redirectUrl);
    }
  }
}
