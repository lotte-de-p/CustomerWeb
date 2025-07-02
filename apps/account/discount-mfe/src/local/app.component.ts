import { Component } from '@angular/core';
import { HardwareDiscountComponent } from '@discount/feat-hardware-discount';

@Component({
  selector: 'tg-hardware-discount-local-app',
  template: `
    <div class="app-container hardware-discount">
      <span>{{ title }}</span>
      <tg-hardware-discount></tg-hardware-discount>
    </div>
  `,
  imports: [HardwareDiscountComponent],
  standalone: true,
})
export class AppComponent {
  title = 'discount-mfe title';
}
