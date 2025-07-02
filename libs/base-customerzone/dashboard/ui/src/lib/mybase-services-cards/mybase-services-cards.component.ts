import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, inject } from '@angular/core';
import {
  MyBaseDashboardDatalayer,
  MyBaseDashboardDatalayerEventName,
  MyBaseDashboardDatalayerEventType,
  ServiceType,
} from '@mybase-dashboard/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { MyBaseSimpleCardComponent } from '../mybase-simple-card/mybase-simple-card.component';

@Component({
  selector: 'tg-mybase-services-cards',
  standalone: true,
  imports: [CommonModule, TranslateModule, MyBaseSimpleCardComponent],
  templateUrl: './mybase-services-cards.component.html',
})
export class MyBaseServicesCardsComponent implements OnChanges {
  @Input()
  payByMobileUrl!: string;

  @Input()
  buyHardwareDiscountUrl!: string;

  @Input()
  easySwitchUrl!: string;

  @Input()
  bestTariffUrl!: string;

  @Input()
  returnDeviceUrl!: string;

  @Input({ required: true })
  type!: 'mobile' | 'internet' | 'dtv';

  @Input({ required: true })
  data!: ServiceType[];

  @Output() analyticsData = new EventEmitter<MyBaseDashboardDatalayer>();

  cards: ServiceType[] = [];

  private readonly urlService: UrlService = inject(UrlService);

  ngOnChanges(): void {
    this.updateData();
  }

  redirectTo(card: ServiceType) {
    const url = this.getUrl(card);
    const event: MyBaseDashboardDatalayer = {
      eventName: MyBaseDashboardDatalayerEventName.CARD_CLICKED,
      eventType: MyBaseDashboardDatalayerEventType.CLICK_CARD,
      attributeData: '',
      attributeName: card,
      destinationUrl: url,
    };
    this.analyticsData.emit(event);
    this.urlService.redirectTo(url);
  }

  getUrl(card: ServiceType): string {
    switch (card) {
      case ServiceType.PAYBYMOBILE:
        return this.payByMobileUrl;
      case ServiceType.BUY_HARDWARE_DISCOUNT:
        return this.buyHardwareDiscountUrl;
      case ServiceType.EASY_SWITCH:
        return this.easySwitchUrl;
      case ServiceType.BEST_TARIFF:
        return this.bestTariffUrl;
      case ServiceType.RETURN_DEVICE:
        return this.returnDeviceUrl;
    }
  }

  private updateData(): void {
    // Only show cards that have a configured URL
    this.cards = this.data.filter((card) => {
      switch (card) {
        case ServiceType.PAYBYMOBILE:
          return !!this.payByMobileUrl;
        case ServiceType.BUY_HARDWARE_DISCOUNT:
          return !!this.buyHardwareDiscountUrl;
        case ServiceType.EASY_SWITCH:
          return !!this.easySwitchUrl;
        case ServiceType.BEST_TARIFF:
          return !!this.bestTariffUrl;
        case ServiceType.RETURN_DEVICE:
          return !!this.returnDeviceUrl;
        default:
          return false;
      }
    });
  }
}
