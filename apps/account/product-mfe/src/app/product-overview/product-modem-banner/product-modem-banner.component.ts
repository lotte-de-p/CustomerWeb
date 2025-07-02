import { Component, Input } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { UrlService } from '@telenet/ng-lib-page';
import { EventsConstants } from '../constants/events.constant';
import { ProductOverviewService } from '../services/product-overview.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'tg-product-modem-banner',
  templateUrl: './product-modem-banner.component.html',
  standalone: true,
  imports: [NgIf, TranslateModule],
})
export class ProductModemBannerComponent {
  @Input() locationId?: string;
  @Input() changeTariffPlanUrl: string;
  @Input() componentInstanceID: string;

  constructor(
    private readonly urlService: UrlService,
    private readonly dataLayerService: DataLayerService,
    private readonly productOverviewService: ProductOverviewService
  ) {}

  redirectToSalesFlow(flow: string, locationId: string | undefined, action: string, source: string) {
    const eventInfoData = this.dataLayerService.createEventInfo(
      EventsConstants.EVENT_NAME_MODEM_UPGRADE_BANNER,
      EventsConstants.EVENT_TYPE_CLICK
    );

    this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
    this.urlService.redirectTo(
      `${this.changeTariffPlanUrl}?flow=${flow}&installationLocationId=${locationId}&action=${action}&source=${source}`
    );
  }
}
