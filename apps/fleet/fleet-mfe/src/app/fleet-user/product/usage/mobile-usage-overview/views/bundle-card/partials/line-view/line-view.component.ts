import { Component, ElementRef, Input } from '@angular/core';
import { BundleCard } from '../../../../models/bundle-card.model';
import { AbstractCardComponent } from '../../../../../shared/components/abstract-card/abstract-card.component';
import { CommonModule, NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LiquidChartComponent } from '../../../../../shared/components/liquid-chart/liquid-chart.component';
import { PhoneNumberPipe } from '../../../../../../../shared/pipes/phone-number.pipe';

@Component({
  selector: 'app-line-view',
  standalone: true,
  templateUrl: './line-view.component.html',
  imports: [NgClass, TranslateModule, LiquidChartComponent, PhoneNumberPipe, CommonModule],
})
export class LineViewComponent extends AbstractCardComponent {
  @Input() card: BundleCard;

  constructor(_elementRef: ElementRef) {
    super(_elementRef, document);
  }

  navigateToMobileUsage(): void {
    this.processClick(this.card.redirectionUrl);
  }
}
