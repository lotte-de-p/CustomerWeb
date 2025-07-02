import { Injectable } from '@angular/core';
import { LabelUtil } from '@telenet/ng-lib-form';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  public getTitle(messageGroup: string, key: string): string {
    return LabelUtil.getLabelKeyWithTypeTitle(this.joinValues([messageGroup, key]));
  }

  public getText(messageGroup: string, key: string): string {
    return LabelUtil.getLabelKeyWithTypeText(this.joinValues([messageGroup, key]));
  }

  public getLabel(messageGroup: string, key: string): string {
    return LabelUtil.getLabelKeyWithTypeLabel(this.joinValues([messageGroup, key]));
  }

  public getButton(messageGroup: string, key: string): string {
    return LabelUtil.getLabelKeyWithTypeButton(this.joinValues([messageGroup, key]));
  }

  private joinValues(values: string[]): string {
    return values.join('.');
  }
}
