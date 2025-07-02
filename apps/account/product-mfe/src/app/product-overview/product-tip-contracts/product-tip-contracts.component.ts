import { Component, Input } from '@angular/core';
import { TIPContractInterface } from '../interfaces/tip-contract.interface';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { EventsConstants } from '../constants/events.constant';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { ProductOverviewService } from '../services/product-overview.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'tg-product-tip-contracts',
  templateUrl: './product-tip-contracts.component.html',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, TranslateModule],
})
export class ProductTipContractsComponent {
  @Input() tipContracts: TIPContractInterface[];
  @Input() componentInstanceID: string;

  constructor(
    private readonly dataLayerService: DataLayerService,
    private readonly productOverviewService: ProductOverviewService
  ) {}

  addProductViewEventToDataLayer(tipContract: TIPContractInterface) {
    tipContract.showDetails = !tipContract.showDetails;

    if (tipContract.showDetails) {
      const eventInfoData = this.dataLayerService.createEventInfo(
        EventsConstants.EVENT_NAME_TARIFF_PLAN,
        EventsConstants.EVENT_TYPE_VIEW_PRODUCT_DETAILS
      );

      const attributes: Record<string, unknown[]> = {};
      attributes[EventsConstants.EVENT_ATTRIBUTE_PRODUCT] = this.getViewedProducts(tipContract.productInfo);
      this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID, attributes);
    }
  }

  getViewedProducts(
    productInfo?: OmapiProduct
  ): { productInfo: { productType: string | undefined; productID: string | undefined } }[] {
    if (productInfo) {
      const product = {
        productInfo: {
          productType: productInfo.productType,
          productID: productInfo.externalProductCode,
        },
      };
      return [product];
    }

    return [];
  }
}
