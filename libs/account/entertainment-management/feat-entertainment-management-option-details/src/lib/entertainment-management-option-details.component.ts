import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { CommonModule } from '@angular/common';
import { WinkButton, WinkSheet, WinkTitle } from '@telenet/wink-ng';
import {
  EntertainmentManagementFacade,
  EntertainmentManagementNgrxModule,
  EntertainmentOption,
} from '@entertainment-management/data-access';
import { PricePipe, EuroSignPipe } from '@telenet/ng-lib-form';
import { UrlService } from '@telenet/ng-lib-page';
import { EntertainmentManagementTieredListComponent } from './entertainment-management-tiered-list/entertainment-management-tiered-list.component';
import { EntertainmentManagementStandaloneComponent } from './entertainment-management-standalone/entertainment-management-standalone.component';

@Component({
  selector: 'tg-entertainment-management-option-details',
  standalone: true,
  imports: [
    CommonModule,
    LoginModule,
    EntertainmentManagementTieredListComponent,
    EntertainmentManagementStandaloneComponent,
    EntertainmentManagementNgrxModule,
    WinkSheet,
    WinkTitle,
    WinkButton,
    PricePipe,
    EuroSignPipe,
  ],
  templateUrl: './entertainment-management-option-details.component.html',
  styleUrl: './entertainment-management-option-details.component.scss',
})
export class EntertainmentManagementOptionDetailsComponent {
  @Input() entertainmentManagementLink!: string;
  id!: string | null;
  @Output() productIdentifier: EventEmitter<string> = new EventEmitter<string>();

  option!: EntertainmentOption;
  scope = ['customeraccount'];
  showCart = false;
  private readonly urlService: UrlService = inject(UrlService);
  private readonly facade: EntertainmentManagementFacade = inject(EntertainmentManagementFacade);

  selectEntertainmentOptionDetails$ = this.facade.selectEntertainmentOptionDetails$;
  selectEntertainmentOptionDetailsType$ = this.facade.selectEntertainmentOptionDetailsType$;

  initAfterLoggedIn() {
    this.id = this.urlService.getParamsValueFromUrl(window.location.href, 'id');
    this.facade.loadEntertainmentOptionDetails();
  }

  navigateToOptions() {
    this.urlService.redirectTo('/');
  }
}
