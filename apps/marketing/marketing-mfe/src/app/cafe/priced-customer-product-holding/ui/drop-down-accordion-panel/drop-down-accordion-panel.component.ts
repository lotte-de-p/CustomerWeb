import { Component, Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { OverviewGroupTypeEnum } from '../group/overview-group-type.enum';
import { PricedCphOverview } from '../../model/priced-cph-data.model';
import { PricedCphState } from '../../state/priced-cph.state';
import { Notification } from '../../model/notification.model';
import { ErrorNotificationComponent } from '../error-notification/error-notification.component';
import { DisclaimerComponent } from '../disclaimer/disclaimer.component';
import { BillPriceComponent } from '../bill-price/bill-price.component';
import { OverviewGroupComponent } from '../group/overview-group.component';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { MarketingCafeNgxsModule } from '../../../marketing-cafe-ngxs.module';

@Component({
  selector: 'tg-marketing-cafe-drop-down-accordion-panel',
  templateUrl: './drop-down-accordion-panel.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    OverviewGroupComponent,
    BillPriceComponent,
    DisclaimerComponent,
    ErrorNotificationComponent,
    AsyncPipe,
    MarketingCafeNgxsModule,
  ],
})
export class DropDownAccordionPanelComponent {
  @Input() overviews: PricedCphOverview[];
  @Select(PricedCphState.notification) notification: Observable<Notification>;

  overviewGroupTypeEnum = OverviewGroupTypeEnum;
}
