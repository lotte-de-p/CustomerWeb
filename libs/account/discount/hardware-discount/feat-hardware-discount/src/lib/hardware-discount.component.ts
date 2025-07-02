import { Component, Input, inject } from '@angular/core';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { AsyncPipe, NgClass, CommonModule } from '@angular/common';
import { DiscountOverviewComponent } from './discount-overview/discount-overview.component';
import {
  HardwareDiscountNgrxModule,
  HardwareDiscountFacade,
  UsedDiscounts,
  HardwareDiscountDatalayerEvent,
} from '@discount/data-access';
import { WinkNotification, WinkParagraph } from '@telenet/wink-ng';
import { DiscountDetailsComponent } from './discount-details/discount-details.component';
import { TranslateModule } from '@ngx-translate/core';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { takeUntil } from 'rxjs';
import { AdditionalDiscountInfoComponent } from './additional-discount-info/additional-discount-info.component';
import * as udl from 'udl';
import { DataLayerAttributes } from '@telenet/ng-lib-datalayer';

@Component({
  standalone: true,
  imports: [
    LoginModule,
    AsyncPipe,
    NgClass,
    DiscountOverviewComponent,
    DiscountDetailsComponent,
    AdditionalDiscountInfoComponent,
    WinkNotification,
    WinkParagraph,
    HardwareDiscountNgrxModule,
    CommonModule,
    TranslateModule,
  ],
  selector: 'tg-hardware-discount',
  templateUrl: './hardware-discount.component.html',
})
export class HardwareDiscountComponent extends AbstractBaseComponent {
  @Input() useDiscountLink!: string;
  @Input() termsConditionsLink!: string;
  @Input() hardwareInvoicesLink!: string;

  scope = ['D_hardwarediscounts'];

  private readonly facade: HardwareDiscountFacade = inject(HardwareDiscountFacade);

  selectHardwareDiscountLoading$ = this.facade.selectHardwareDiscountLoading$;
  selectHardwareDiscountError$ = this.facade.selectHardwareDiscountError$;
  selectHardwareDiscountOverview$ = this.facade.selectHardwareDiscountOverview$;

  usedDiscounts!: UsedDiscounts[];
  creditCheck!: string;

  initAfterLoggedIn() {
    this.facade.loadHardwareDiscount();
    this.obs(this.selectHardwareDiscountOverview$)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((discountOverview) => {
        this.creditCheck = discountOverview.creditCheck;
        this.usedDiscounts = discountOverview.usedDiscounts;
      });
  }

  sendAnalyticsEvent(dataLayerEvent: { event: HardwareDiscountDatalayerEvent; productId?: string }) {
    let attributes = {} as DataLayerAttributes;
    if (dataLayerEvent.productId) {
      const productId = dataLayerEvent.productId;
      attributes = {
        product: [this.getItem(productId)] as udl.Item[],
      };
    }
    this.facade.sendDatalayerEvent(dataLayerEvent.event, attributes);
  }

  private getItem(productId: string): udl.Item {
    const item = new udl.Item();
    item.setProductInfo(this.getProductInfo(productId));
    return item;
  }

  private getProductInfo(productId: string): udl.Product {
    const productInfo = new udl.Product();
    productInfo.setProductID(productId);
    return productInfo;
  }
}
