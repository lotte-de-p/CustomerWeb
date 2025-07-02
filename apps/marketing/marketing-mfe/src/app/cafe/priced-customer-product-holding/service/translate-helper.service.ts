import { Injectable } from '@angular/core';
import { LabelUtil } from '@telenet/ng-lib-form';
import { PricedCphConstants } from '../util/priced-cph.constants';

@Injectable({
  providedIn: 'root',
})
export class TranslateHelperService {
  public getTitle(key: string): string {
    return LabelUtil.getLabelKeyWithTypeTitle(this.joinValues([PricedCphConstants.MESSAGE_GROUP, key]));
  }

  public getLabel(key: string): string {
    return LabelUtil.getLabelKeyWithTypeLabel(this.joinValues([PricedCphConstants.MESSAGE_GROUP, key]));
  }

  public getText(key: string): string {
    return LabelUtil.getLabelKeyWithTypeText(this.joinValues([PricedCphConstants.MESSAGE_GROUP, key]));
  }

  private joinValues(values: string[]): string {
    return values.join('.');
  }
}
