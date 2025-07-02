import { Component, Input } from '@angular/core';
import { PricedCphItem } from '../../model/priced-cph-data.model';
import { OverviewGroupTypeEnum } from './overview-group-type.enum';
import { TranslateHelperService } from '../../service/translate-helper.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf, NgFor, NgTemplateOutlet, NgClass } from '@angular/common';

@Component({
  selector: 'tg-marketing-cafe-overview-group',
  templateUrl: './overview-group.component.html',
  standalone: true,
  imports: [NgIf, NgFor, NgTemplateOutlet, NgClass, TranslateModule],
})
export class OverviewGroupComponent {
  @Input() items: PricedCphItem[];
  @Input() type: OverviewGroupTypeEnum;

  overviewGroupTypeEnum = OverviewGroupTypeEnum;

  constructor(public translateHelperService: TranslateHelperService) {}

  getLabelKey(item: PricedCphItem): string {
    return item.amount === 1 ? 'item' : 'item-with-amount';
  }

  getLabelArgs(item: PricedCphItem): { itemName: string; amount: number } {
    return {
      itemName: item.key,
      amount: item.amount,
    };
  }
}
