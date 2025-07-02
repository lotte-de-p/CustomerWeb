import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { tocUrl } from '@sales/order-configurator/summary/state';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule],
  selector: 'tg-order-configurator-summary-feat-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Output() contractSummaryLinkClickedEvent = new EventEmitter();
  @Output() termsAndConditionsLinkClickedEvent = new EventEmitter();
  tocUrl$: Observable<string>;

  constructor(private readonly store: Store) {
    this.tocUrl$ = this.store.select(tocUrl);
  }

  contractSummaryLinkClicked() {
    this.contractSummaryLinkClickedEvent.next(true);
  }

  termsAndConditionsLinkClicked() {
    this.termsAndConditionsLinkClickedEvent.next(true);
  }
}
