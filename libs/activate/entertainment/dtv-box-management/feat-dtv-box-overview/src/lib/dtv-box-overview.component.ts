import { UntilDestroy } from '@ngneat/until-destroy';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Address,
  DtvBox,
  DtvBoxManagementFacade,
  DtvBoxManagementNgrxModule,
  DtvBoxSubscription,
  DtvBoxType,
} from '@entertainment/dtv-box-management/data-access';
import { Observable } from 'rxjs';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { TranslateModule } from '@ngx-translate/core';
import { LoaderModule } from '@telenet/ng-lib-page';
import { MessagesModule } from '@telenet/ng-lib-message';
import { LetDirective } from '@ngrx/component';
import { DtvBoxDetailComponent, DtvBoxSubscriptionSelectorComponent } from '@entertainment/dtv-box-management/ui';
import { DtvBoxManagementConstants } from './constants/dtv-box-management.constants';

@UntilDestroy()
@Component({
  selector: 'tg-entertainment-dtv-box-overview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MessagesModule,
    LoaderModule,
    DtvBoxDetailComponent,
    LetDirective,
    LoginModule,
    DtvBoxManagementNgrxModule,
    DtvBoxSubscriptionSelectorComponent,
  ],
  templateUrl: './dtv-box-overview.component.html',
})
export class DtvBoxOverviewComponent {
  @Input() enableLoader: boolean;
  @Input() enableMask: boolean;
  @Input() pageType: string;
  @Input() securityCode: string;
  @Input() imagePath: string;

  readonly messageGroupName = DtvBoxManagementConstants.MESSAGE_GROUP_NAME;
  readonly scopes = DtvBoxManagementConstants.SCOPES;

  selectedDtvSubscription$: Observable<DtvBoxSubscription[] | undefined>;
  subscriptions$: Observable<DtvBoxSubscription[]>;
  isPinCodeReset$: Observable<boolean>;
  resetSubscriptionIdentifier: string | undefined;
  showSecurityCode$: Observable<boolean>;
  addresses$: Observable<Address[]>;
  selectedAddress$: Observable<Address | undefined>;
  isBaseCustomer: boolean;

  private readonly facade = inject(DtvBoxManagementFacade);

  initAfterLoggedIn() {
    this.facade.loadAddresses();
    this.facade.loadSubscriptions();

    this.selectedDtvSubscription$ = this.facade.selectedDtvSubscription$;
    this.addresses$ = this.facade.addressesWithDtvSubscriptions$;
    this.selectedAddress$ = this.facade.selectedAddress$;
    this.isPinCodeReset$ = this.facade.isPinCodeReset$;
    this.showSecurityCode$ = this.facade.showSecurityCode$;
    this.subscriptions$ = this.facade.subscriptions$;
  }

  onResetPinCode(dtvSubscription: DtvBoxSubscription | undefined): void {
    if (!dtvSubscription || !dtvSubscription.dtvBoxes) {
      return;
    }

    const type = dtvSubscription.dtvBoxes[0]?.type;
    this.resetSubscriptionIdentifier = dtvSubscription.identifier;

    switch (type) {
      case DtvBoxType.EOS:
        this.facade.resetPinCode(dtvSubscription.identifier);
        break;

      case DtvBoxType.SIPADAN:
        this.facade.showSecurityCode();
        break;

      default:
        throw new Error('No type found');
    }
  }

  isTypeUnanimous(dtvBoxes: DtvBox[] | undefined): boolean {
    if (!dtvBoxes) {
      return false;
    }

    return dtvBoxes.every((box: DtvBox) => box.type === dtvBoxes[0].type);
  }

  setAddress(address: Address): void {
    this.facade.setSelectedAddress(address);
  }
}
