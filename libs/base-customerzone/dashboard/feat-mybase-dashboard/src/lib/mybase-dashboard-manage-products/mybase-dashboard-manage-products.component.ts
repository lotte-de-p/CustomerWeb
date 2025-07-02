import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {
  MyBaseDashboardDatalayer,
  MyBaseDashboardDatalayerAttributeName,
  MyBaseDashboardDatalayerEventName,
  MyBaseDashboardDatalayerEventType,
  ProductsResponse,
  UpdatedProductsResponse,
} from '@mybase-dashboard/data-access';
import { MyBaseSimpleCardComponent } from '@mybase-dashboard/ui';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-mybase-dashboard-manage-products',
  standalone: true,
  imports: [CommonModule, TranslateModule, MyBaseSimpleCardComponent],
  templateUrl: './mybase-dashboard-manage-products.component.html',
  styleUrls: ['./mybase-dashboard-manage-products.component.scss'],
})
export class MyBaseDashboardManageProductsComponent {
  @Input({ required: true })
  set data(data: ProductsResponse) {
    this.showCard = data.showCard;

    const products = {};
    if (data.mobile?.products.length) products['mobile'] = data.mobile.products;
    if (data.dtv?.products.length) products['dtv'] = data.dtv.products;
    if (data.internet?.products.length) products['internet'] = data.internet.products;
    this.pendingProducts['mobile'] = data.mobile?.pending;
    this.pendingProducts['internet'] = data.internet?.pending;
    this.pendingProducts['dtv'] = data.dtv?.pending;

    this.products = products;
  }

  @Input({ required: true })
  manageProductsMobileLink!: string;

  @Input({ required: true })
  manageProductsInternetLink!: string;

  @Input({ required: true })
  manageProductsDTVLink!: string;

  showCard = true;
  products: Partial<Omit<UpdatedProductsResponse, 'showCard'>> = {};
  pendingProducts = {};

  @Output() analyticsData = new EventEmitter<MyBaseDashboardDatalayer>();

  readonly iconMap = {
    dtv: 'icon-tv',
    internet: 'icon-wifi',
    mobile: 'icon-mobile',
  };

  private readonly urlService: UrlService = inject(UrlService);

  redirectTo(productType: string): void {
    const url = this.getUrl(productType);
    this.sendAnalyticsData(productType, url);
    this.urlService.redirectTo(url);
  }

  getUrl(productType: string): string {
    switch (productType) {
      case 'mobile':
        return this.manageProductsMobileLink;
      case 'internet':
        return this.manageProductsInternetLink;
      case 'dtv':
        return this.manageProductsDTVLink;
      default:
        return '';
    }
  }

  sendAnalyticsData(productType: string, destinationUrl?: string) {
    const myBaseDashbaordAnalyticsData: MyBaseDashboardDatalayer = {
      eventName: MyBaseDashboardDatalayerEventName.BUTTON_CLICKED,
      eventType: MyBaseDashboardDatalayerEventType.CLICK,
      attributeName: MyBaseDashboardDatalayerAttributeName['MANAGE_' + productType.toUpperCase()],
      destinationUrl: destinationUrl,
    };
    this.analyticsData.emit(myBaseDashbaordAnalyticsData);
  }
}
