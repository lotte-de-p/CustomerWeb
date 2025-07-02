import { Component, Input, inject } from '@angular/core';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { AsyncPipe, NgClass, CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {
  EntertainmentManagementFacade,
  EntertainmentManagementNgrxModule,
} from '@entertainment-management/data-access';
import { EntertainmentManagementOptionDetailsComponent } from '@entertainment-management/feat-entertainment-management-option-details';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { EntertainmentManagementOptionsListComponent } from './entertainment-management-options-list/entertainment-management-options-list.component';
import { WinkNotification, WinkParagraph } from '@telenet/wink-ng';
import { takeUntil } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    LoginModule,
    EntertainmentManagementNgrxModule,
    AsyncPipe,
    NgClass,
    CommonModule,
    TranslateModule,
    WinkParagraph,
    WinkNotification,
    EntertainmentManagementOptionDetailsComponent,
    EntertainmentManagementOptionsListComponent,
  ],
  selector: 'tg-entertainment-management',
  templateUrl: './entertainment-management.component.html',
  styleUrls: ['./entertainment-management.component.scss'],
})
export class EntertainmentManagementComponent extends AbstractBaseComponent {
  @Input() entertainmentOptionDetailsLink!: string;
  scope = ['customeraccount'];
  productId!: string | null;
  isEntertainmentManagementLoaded!: boolean;

  private readonly facade: EntertainmentManagementFacade = inject(EntertainmentManagementFacade);

  selectEntertainmentManagementError$ = this.facade.selectEntertainmentManagementError$;
  selectEntertainmentManagementLoading$ = this.facade.selectEntertainmentManagementLoading$;
  selectEntertainmentManagementLoaded$ = this.facade.selectEntertainmentManagementLoaded$;

  initAfterLoggedIn() {
    this.obs(this.selectEntertainmentManagementLoaded$)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isLoaded) => {
        this.isEntertainmentManagementLoaded = !!isLoaded;
        if (!isLoaded) {
          this.facade.loadEntertainmentManagementOptions();
        }
      });
  }
}
