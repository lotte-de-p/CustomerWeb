import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent, ColorBulletComponent } from '@general/ui-search';
import { SearchResultItem } from '@general/data-access-search';
import { HardwarePriceComponent } from '../hardware-price/hardware-price.component';
import { HardwarePlanComponent } from '../hardware-plan/hardware-plan.component';
import { SearchResultComponent } from '../search-result/search-result.component';
import { TlnTagBadgeColorPipe } from '../../pipes/tln-tag-badge-color.pipe';
import { TlnTagLabelPipe } from '../../pipes/tln-tag-label.pipe';
import { TlnProductTagsPipe } from '../../pipes/tln-product-tags.pipe';
import { TranslateService } from '@ngx-translate/core';
import { EuroSignPipe, PricePipe } from '@telenet/ng-lib-form';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[tg-general-search-hardware-page]',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    BadgeComponent,
    HardwarePriceComponent,
    HardwarePlanComponent,
    ColorBulletComponent,
    TlnTagBadgeColorPipe,
    TlnTagLabelPipe,
    TlnProductTagsPipe,
    PricePipe,
    EuroSignPipe,
  ],
  template: `
    <a
      [attr.data-testid]="'tg-foundation-general-search-hardware-page'"
      [href]="getHardwareDetailsUrl()"
      (click)="goToResult($event, searchResultItem)"
      class="justify-content--start--md justify-content--center search-product display--flex width--full height--full text-decoration--none mb--l mx--xxs">
      <div
        class="cards--append cards--container cursor--pointer cards--shadow display--flex width--full border--all--n color-text link link--no-underline secondary justify-content--stretch p--m">
        <div class="cards--body height--full">
          <div class="cards--body--inner-container display--flex flex-direction--column height--full width--full">
            <div class="search-product__header mb--l">
              <div class="font--caption">{{ searchResultItem.product.brand }}</div>
              <div class="heading--6 heading--notopmargin">{{ searchResultItem.name }}</div>
            </div>
            <div
              class="search-product__content display--flex flex-direction--column width--full height--full justify-content--between">
              <div class="search-product__content__first">
                <div class="search-product__content__image display--flex align-items--center justify-content--center">
                  <img
                    [src]="searchResultItem.product.image"
                    [alt]="searchResultItem.name"
                    [attr.data-testid]="'image'" />
                </div>
                <div class="search-product__content__configurations mt--xxs">
                  <div
                    tg-general-search-color-bullets
                    [colors]="searchResultItem.product.color"
                    class="row mb--l justify-content--center"></div>
                </div>
                <div class="">
                  <div class="search-product__badge horizontal-center-align center-align__column">
                    <tg-foundation-general-search-badge
                      [attr.data-testid]="'badge'"
                      [color]="tag | tlnTagBadgeColor"
                      *ngFor="let tag of searchResultItem | tlnProductTags">
                      <ng-container *ngIf="searchResultItem.product.discountedPriceAfterCashback > 0">
                        {{ searchResultItem.product.discountedPriceAfterCashback | price: false : false | euroSign }}
                      </ng-container>
                      {{ tag | tlnTagLabel }}
                    </tg-foundation-general-search-badge>
                  </div>
                </div>
              </div>
              <tg-foundation-general-search-hardware-price [product]="searchResultItem.product">
              </tg-foundation-general-search-hardware-price>
              <tg-foundation-general-search-plan *ngIf="searchResultItem.product" [product]="searchResultItem.product">
              </tg-foundation-general-search-plan>
            </div>
          </div>
        </div>
      </div>
    </a>
  `,
})
export class HardwarePageComponent extends SearchResultComponent {
  @Input() searchResultItem: SearchResultItem = { product: { id: '' } } as SearchResultItem;
  @Input() detailsPagePath: string;

  readonly locale: string;

  constructor(private readonly translateService: TranslateService) {
    super();
    this.locale = this.translateService.currentLang;
  }

  getHardwareDetailsUrl() {
    return `${this.detailsPagePath}?productId=${this.searchResultItem.product?.id}`;
  }
}
