import { Component, Input, OnInit } from '@angular/core';
import { PricedCphOverview } from '../../model/priced-cph-data.model';
import { Select } from '@ngxs/store';
import { PricedCphState } from '../../state/priced-cph.state';
import { Observable } from 'rxjs';
import { Notification } from '../../model/notification.model';
import { PricedCphDatalayerService } from '../../service/priced-cph-datalayer.service';
import { AsyncPipe } from '@angular/common';
import { DropDownAccordionPanelComponent } from '../drop-down-accordion-panel/drop-down-accordion-panel.component';
import { TogglePanelDirective } from '../directives/panel-toggler.directive';
import { DropDownAccordionHeaderComponent } from '../drop-down-accordion-header/drop-down-accordion-header.component';

@Component({
  selector: 'tg-marketing-cafe-drop-down-accordion',
  templateUrl: './drop-down-accordion.component.html',
  standalone: true,
  imports: [DropDownAccordionHeaderComponent, TogglePanelDirective, DropDownAccordionPanelComponent, AsyncPipe],
})
export class DropDownAccordionComponent implements OnInit {
  @Input() title: string;
  @Input() overviews: PricedCphOverview[];
  @Select(PricedCphState.notification) notification: Observable<Notification>;

  constructor(private readonly pricedCphDatalayerService: PricedCphDatalayerService) {}

  ngOnInit(): void {
    this.pricedCphDatalayerService.pushComponentViewed();
  }
}
