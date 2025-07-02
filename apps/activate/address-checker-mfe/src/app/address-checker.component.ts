import { Component, Input } from '@angular/core';
import { FiberAddressCheckerComponent } from '@address-checker/feat-address-checker';

@Component({
  selector: 'app-address-checker',
  template: `
    <tg-fiber-address-checker
      [urlToProductPage]="urlToProductPage"
      [urlToInfoPage]="urlToInfoPage"
      [urlRequestSubscription]="urlRequestSubscription">
    </tg-fiber-address-checker>
  `,
  imports: [FiberAddressCheckerComponent],
  standalone: true,
})
export class AddressCheckerComponent {
  @Input() urlToProductPage = '';
  @Input() urlToInfoPage = '';
  @Input() urlRequestSubscription = '';
}
