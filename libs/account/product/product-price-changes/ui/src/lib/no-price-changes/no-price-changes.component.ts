import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'product-no-price-changes',
  template: ` <div class="notification notification--info personal-info">
    <div class="icon icon-information-shape info display--flex gap--s flex-direction--row--md flex-direction--column">
      <div
        data-cy="price-cannot-show"
        innerHTML="{{ 'ng.product-price-changes.cannot-show-personal-situation' | translate }}"></div>
    </div>
  </div>`,
  styleUrl: './no-price-changes.component.scss',
  imports: [TranslateModule],
  encapsulation: ViewEncapsulation.None,
})
export class NoPriceChangesComponent {}
