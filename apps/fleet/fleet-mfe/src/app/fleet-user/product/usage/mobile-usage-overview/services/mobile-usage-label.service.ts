import { LabelTypesEnum } from '../enums/label-types.enum';
import { ViewTypeEnum } from '../enums/view-type.enum';
import { LabelUtil } from '@telenet/ng-lib-form';
import { CustomerCategoryEnum, LabelKeyType, PathCategorisationService } from '@telenet/ng-lib-page';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UsageStatusConstants } from '../constants/usage-status.constants';

@Injectable({
  providedIn: 'root',
})
export class MobileUsageLabelService {
  constructor(
    private readonly translateService: TranslateService,
    private readonly pathCategorisationService: PathCategorisationService
  ) {}

  getLabelKey(
    label: string,
    type: string = LabelTypesEnum.TEXT,
    values: object = {},
    viewType?: string,
    businessLabel?: boolean
  ): string {
    const isBusinessCustomer = this.pathCategorisationService.isCustomerOfType(CustomerCategoryEnum.BUSINESS);
    const { MESSAGE_GROUP_STATUS_CARD, MESSAGE_GROUP_STATUS_MOMENT } = UsageStatusConstants;
    const notificationType = viewType === ViewTypeEnum.MOMENT ? MESSAGE_GROUP_STATUS_MOMENT : MESSAGE_GROUP_STATUS_CARD;
    let labelWithPrefix = `${notificationType}.${label}`;

    if (businessLabel && isBusinessCustomer) {
      labelWithPrefix = `${labelWithPrefix}-bus`;
    }

    const labelKey = this.getLabelKeyWithType(labelWithPrefix, type);

    return this.translateService.instant(labelKey, values);
  }

  private getLabelKeyWithType(labelWithPrefix: string, type: string): string {
    switch (type) {
      case LabelTypesEnum.TITLE:
        return LabelUtil.getLabelKeyWithTypeTitle(labelWithPrefix);
      case LabelTypesEnum.BUTTON:
        return LabelUtil.getLabelKeyWithTypeButton(labelWithPrefix);
      case LabelTypesEnum.LINK:
        return LabelUtil.getLabelKeyByType(labelWithPrefix, LabelKeyType.LINK);
      default:
        return LabelUtil.getLabelKeyWithTypeText(labelWithPrefix);
    }
  }
}
