import { Component, Input } from '@angular/core';
import { LabelUtil } from '@telenet/ng-lib-form';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  standalone: true,
  imports: [TranslateModule, CommonModule],
})
export class DisclaimerComponent {
  @Input() messageGroupName: string;
  showMore: boolean;

  toggleDisclaimerContent() {
    this.showMore = !this.showMore;
  }

  public getText(key: string): string {
    return LabelUtil.getLabelKeyWithTypeText(this.joinValues([this.messageGroupName, key]));
  }

  private joinValues(values: string[]): string {
    return values.join('.');
  }
}
