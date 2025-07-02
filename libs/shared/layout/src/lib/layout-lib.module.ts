import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SummaryHeaderComponent } from './summary/summary-header/summary-header.component';
import { SummaryContentRowComponent } from './summary/summary-content-row/summary-content-row.component';
import { PricePipe, TgFormsModule } from '@telenet/ng-lib-form';

@NgModule({
  imports: [CommonModule, TranslateModule, TgFormsModule, PricePipe],
  declarations: [SummaryHeaderComponent, SummaryContentRowComponent],
  exports: [SummaryHeaderComponent, SummaryContentRowComponent],
  providers: [],
})
export class LayoutLibModule {}
