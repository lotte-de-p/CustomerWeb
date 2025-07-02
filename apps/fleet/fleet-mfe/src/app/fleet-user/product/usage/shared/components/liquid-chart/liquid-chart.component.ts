import { Component, Input } from '@angular/core';
import { ChartConfiguration } from './models/chart-configuration';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass, NgIf, NgStyle } from '@angular/common';
import { InternetUsage } from '../../../../../shared/models/internet-usage.model';
import { ReplaceDecimalsPipe } from '../../../../../shared/pipes/replace-decimals.pipe';

@Component({
  selector: 'app-liquid-chart',
  templateUrl: './liquid-chart.component.html',
  imports: [TranslateModule, NgClass, NgIf, NgStyle, ReplaceDecimalsPipe],
  standalone: true,
})
export class LiquidChartComponent {
  @Input() config: ChartConfiguration;
  @Input() internetUsage: InternetUsage;
  @Input() hasActivationInProgressProduct: boolean;
  @Input() isInternet: boolean;
  @Input() totalUsage: string;
}
