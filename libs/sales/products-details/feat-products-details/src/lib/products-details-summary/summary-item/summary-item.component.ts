import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-sales-products-details-summary-item',
  standalone: true,
  templateUrl: './summary-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgForOf, NgClass, TranslateModule],
})
export class SummaryItemComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() specs!: string[];
}
