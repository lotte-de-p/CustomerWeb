import { Component, ElementRef, Input } from '@angular/core';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { MobileUsageOverviewConstant } from '../../../../constants/mobile-usage-overview.constant';
import { BundleCard } from '../../../../models/bundle-card.model';
import { MobileUsageOverviewService } from '../../../../services/mobile-usage-overview.service';
import { AbstractCardComponent } from '../../../../../shared/components/abstract-card/abstract-card.component';
import { ProductSubscriptionsInterface } from '../../../../../../../shared/interfaces/product/product-subscriptions.interface';
import { LiquidChartComponent } from '../../../../../shared/components/liquid-chart/liquid-chart.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, SlicePipe } from '@angular/common';
import { PhoneNumberPipe } from '../../../../../../../shared/pipes/phone-number.pipe';
import { ImageSrcPathModule } from '@telenet/ng-lib-page';
@Component({
  selector: 'app-group-view',
  standalone: true,
  templateUrl: './group-view.component.html',
  imports: [LiquidChartComponent, TranslateModule, SlicePipe, PhoneNumberPipe, ImageSrcPathModule, CommonModule],
})
export class GroupViewComponent extends AbstractCardComponent {
  @Input() card: BundleCard;

  constructor(
    public mobileUsageOverviewService: MobileUsageOverviewService,
    private readonly configService: ConfigService,
    _elementRef: ElementRef
  ) {
    super(_elementRef, document);
  }

  getProfileImageUrl(product: ProductSubscriptionsInterface): string {
    if (product && product.pid) {
      return (
        this.configService.getConfig(ConfigConstants.OCAPI_URl) +
        MobileUsageOverviewConstant.OCAPI_RESOURCE_URL +
        product.pid
      );
    }
  }

  getLabelName(label: string): string {
    return this.mobileUsageOverviewService.getNameByLabel(label);
  }

  navigateToMobileUsage(): void {
    this.processClick(this.card.redirectionUrl);
  }
}
