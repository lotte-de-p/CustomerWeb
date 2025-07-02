import { Component, Input, OnInit } from '@angular/core';
import {
  StrikeTroughSummaryContentRow,
  SummaryContentPromoRowLevel1,
  SummaryContentPromoRowLevel2,
  SummaryContentPromoRowLevel3,
  SummaryContentRowConfiguration,
  SummaryContentRowLevel1,
  SummaryContentRowLevel2,
  SummaryContentRowLevel3,
  SummaryContentRowParentLevel1,
} from './summary-content-row.interface';
import { OverviewPrice, OverviewPriceType } from '../../model/product-overview-data.model';
import { LabelUtil, TextFlowType } from '@telenet/ng-lib-form';

const CONNECT_FIVE_MESSAGE_GROUP = 'c5-checkout';

@Component({
  selector: 'tg-summary-content-row',
  templateUrl: './summary-content-row.component.html',
})
export class SummaryContentRowComponent implements OnInit {
  @Input() level: number;
  @Input() price: OverviewPrice;
  @Input() strikeThroughPrice: OverviewPrice;
  @Input() firstItem: boolean;
  @Input() promo: boolean;
  @Input() isFollowedByPromoLabel: boolean;

  @Input() labelConfiguration?: SummaryContentRowConfiguration;
  @Input() priceConfiguration?: SummaryContentRowConfiguration;
  priceType = OverviewPriceType;
  strikeTroughConfiguration = StrikeTroughSummaryContentRow;
  rowMargin?: SummaryContentRowConfiguration;

  ngOnInit(): void {
    if (!this.labelConfiguration) {
      this.labelConfiguration = this.getConfigurationType();
    }
    if (!this.priceConfiguration) {
      this.priceConfiguration = this.getConfigurationType();
    }
    if (this.level === 1 && !this.firstItem) {
      this.rowMargin = SummaryContentRowParentLevel1;
    }
  }

  private getConfigurationType(): SummaryContentRowConfiguration {
    return this.promo ? this.getPromoRowConfigurationType() : this.getRowConfigurationType();
  }

  private getPromoRowConfigurationType(): SummaryContentRowConfiguration {
    switch (this.level) {
      case 1:
        return SummaryContentPromoRowLevel1;
      case 2:
        return SummaryContentPromoRowLevel2;
      case 3:
        return SummaryContentPromoRowLevel3;
      default:
        return SummaryContentPromoRowLevel1;
    }
  }

  private getRowConfigurationType(): SummaryContentRowConfiguration {
    switch (this.level) {
      case 1:
        return SummaryContentRowLevel1;
      case 2:
        return SummaryContentRowLevel2;
      case 3:
        return SummaryContentRowLevel3;
      default:
        return SummaryContentRowLevel1;
    }
  }

  getTextFlow(): TextFlowType {
    if (this.level === 1) {
      return TextFlowType.h4;
    }
    return TextFlowType.body;
  }

  getLabel(level: number, priceType?: OverviewPriceType): string {
    let key = '';
    if (level === 1) {
      key = priceType === OverviewPriceType.ONE_TIME ? 'one-time-price' : 'price-per-month';
    } else {
      key = priceType === OverviewPriceType.ONE_TIME ? 'detail-one-time-price' : 'detail-price-per-month';
    }

    return LabelUtil.getLabelKeyWithTypeLabel([CONNECT_FIVE_MESSAGE_GROUP, 'overview', key].join('.'));
  }
}
