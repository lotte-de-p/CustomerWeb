import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UntilDestroy } from '@ngneat/until-destroy';
import { TranslateModule } from '@ngx-translate/core';
import { ClickOutsideDirective, LoaderModule, UrlService } from '@telenet/ng-lib-page';
import { LoginDetails, LoginModule } from '@telenet/ng-lib-ocapi';
import {
  MessageType,
  MobileLine,
  SimManagementConstants,
  SimManagementFacade,
  SimManagementNgrxModule,
  SimType,
  User,
} from '@sim-management/data-access';
import {
  SimManagementActionCardComponent,
  SimManagementNotificationComponent,
  SimManagementBlockDialogComponent,
  SimManagementAssignDialogComponent,
  SimManagementUnblockDialogComponent,
  SimManagementSkeletonComponent,
  SimManagementDeactivateESimDialogComponent,
} from '@sim-management/ui';
import { MessagesModule } from '@telenet/ng-lib-message';
import { LetDirective } from '@ngrx/component';
import { ReactiveFormsModule } from '@angular/forms';
import { filter, firstValueFrom, map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SimManagementMobileLineSelectorComponent } from '@sim-management/feat-mobile-line-selector';
import { PendingESimInformationCardComponent } from './pending-e-sim-information-card/pending-e-sim-information-card.component';
import { MobileLineDetailsViewModel } from './mobile-line-details-view-model.interface';
import { SimInformationCardComponent } from './sim-information-card/sim-information-card.component';
import { ActivateESimActionCardComponent } from './activate-e-sim-action-card/activate-e-sim-action-card.component';
import { ActivateSimActionCardComponent } from './activate-sim-action-card/activate-sim-action-card.component';
import { PendingSimInformationCardComponent } from './pending-sim-information-card/pending-sim-information-card.component';
import { HelpWithESimCardComponent } from './help-with-e-sim-card/help-with-e-sim-card.component';
import { PortESimActionCardComponent } from './port-e-sim-action-card/port-e-sim-action-card.component';

@UntilDestroy()
@Component({
  selector: 'tg-sim-management-mobile-line-details',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TranslateModule,
    LoaderModule,
    LoginModule,
    SimManagementNgrxModule,
    SimManagementMobileLineSelectorComponent,
    SimManagementNotificationComponent,
    SimManagementActionCardComponent,
    SimManagementSkeletonComponent,
    PendingESimInformationCardComponent,
    PendingSimInformationCardComponent,
    SimInformationCardComponent,
    ActivateESimActionCardComponent,
    ActivateSimActionCardComponent,
    HelpWithESimCardComponent,
    PortESimActionCardComponent,
    MessagesModule,
    LetDirective,
    ReactiveFormsModule,
    ClickOutsideDirective,
  ],
  templateUrl: './mobile-line-details.component.html',
  styleUrls: ['./mobile-line-details.styles.scss'],
})
export class MobileLineDetailsComponent implements OnInit {
  @Input() eSimInformationUrl: string;
  @Input() deviceSupportsESimUrl: string;
  @Input() profileManagementUrl: string;
  @Input() smsVerificationUrl: string;
  @Input() simSwapUrl: string;
  @Input() mobileBarringUrl: string;
  @Input() activateESimSmartWatchInfoUrl: string;
  @Input() eSimActivationUrl: string;
  @Input() simActivationUrl: string;
  @Input() portingUrl: string;

  readonly scopes = SimManagementConstants.SCOPES;
  viewModel: MobileLineDetailsViewModel;

  constructor(
    private readonly facade: SimManagementFacade,
    private readonly dialog: MatDialog,
    private readonly urlService: UrlService
  ) {}

  get SimType(): typeof SimType {
    return SimType;
  }

  get MessageType(): typeof MessageType {
    return MessageType;
  }

  ngOnInit(): void {
    this.viewModel = {
      mobileLines$: this.facade.mobileLines$,
      selectedMobileLine$: this.facade.selectedMobileLine$,
      isManagerOrContractHolder$: this.facade.isManagerOrContractHolder$,
      isMember$: this.facade.isMember$,
      householdUsers$: this.facade.householdUsers$,
      isESimSwapInProgress$: this.facade.isESimSwapInProgress$,
      isESimSwapReadyForActivation$: this.facade.isESimSwapReadyForActivation$,
      isSimSwapReadyForActivation$: this.facade.isSimSwapReadyForActivation$,
      isActivateESimSmartWatchInfoActionVisible$: this.facade.isActivateESimSmartWatchInfoActionVisible$,
      isESimProfileRequestVisible$: this.facade.isRequestESimProfileVisible$,
      isAssignActionVisible$: this.facade.isAssignActionVisible$,
      isBlockActionVisible$: this.facade.isBlockActionVisible$,
      isSimSwapActionVisible$: this.facade.isSimSwapActionVisible$,
      isUnblockActionVisible$: this.facade.isUnblockActionVisible$,
      isDeactivateESimWearableActionVisible$: this.facade.isDeactivateESimWearableActionVisible$,
      isBlockedBySystem$: this.facade.isBlockedBySystem$,
      isLoading$: this.facade.isLoading$,
      actionResultMessage$: this.facade.actionResultMessage$,
    };
  }

  initAfterLoggedIn(loginDetails: LoginDetails) {
    this.facade.setLoginDetails(loginDetails);
    this.facade.loadMobileLines();
  }

  onMobileLineChange(mobileLine: MobileLine) {
    this.facade.setSelectedMobileLine(mobileLine);
    this.facade.loadHouseHoldUsers(mobileLine);
  }

  onBlockClick(mobileLine: MobileLine) {
    const blockDialog = this.dialog.open(SimManagementBlockDialogComponent, {
      data: {
        mobileLine,
      },
    });

    firstValueFrom(blockDialog.afterClosed()).then((result: boolean) => {
      if (result) {
        this.facade.blockMobileLine(mobileLine);
      }
    });
  }

  onUnblockClick(mobileLine: MobileLine) {
    const unblockDialog = this.dialog.open(SimManagementUnblockDialogComponent, {
      data: {
        mobileLine,
      },
    });

    firstValueFrom(unblockDialog.afterClosed()).then((result: boolean) => {
      if (result) {
        this.facade.unblockMobileLine(mobileLine);
      }
    });
  }

  onAssignClick(mobileLine: MobileLine, householdUsers: User[]): void {
    const profileManagementUrl = this.profileManagementUrl;

    const assignDialog = this.dialog.open(SimManagementAssignDialogComponent, {
      data: {
        mobileLine,
        householdUsers,
        profileManagementUrl,
      },
    });
    firstValueFrom(assignDialog.afterClosed()).then((userId: string) => {
      if (userId) {
        this.facade.assignMobileLine(mobileLine, userId);
      }
    });
  }

  onPartialBlockClick(mobileLine: MobileLine): void {
    const mobileBarringUrlWithMsisdn = this.mobileBarringUrl.replace('__msisdn__', mobileLine.msisdn);
    this.urlService.redirectTo(mobileBarringUrlWithMsisdn);
  }

  onActivateESimSmartWatchInfoClick(): void {
    this.urlService.redirectTo(this.activateESimSmartWatchInfoUrl);
  }

  onRequestESimClick(): void {
    this.urlService.redirectTo(this.smsVerificationUrl);
  }

  onRequestPhysicalSimClick(mobileLine: MobileLine): void {
    this.facade.getSimSwapSalesOrderId(mobileLine.msisdn);

    const salesOrderId$ = this.facade.simSwapSalesOrderId$.pipe(
      filter((salesOrder) => !!salesOrder),
      map((salesOrder) => salesOrder as string)
    );

    firstValueFrom(salesOrderId$).then((salesOrderId: string) => {
      const simSwapUrlWithParameters = this.simSwapUrl
        .replace('__msisdn__', mobileLine.msisdn)
        .replace('__salesOrderId__', salesOrderId);

      this.urlService.redirectTo(simSwapUrlWithParameters);
    });
  }

  onDeactivateESimForSmartWatchClick(mobileLine: MobileLine) {
    const deactivateESimDialog = this.dialog.open(SimManagementDeactivateESimDialogComponent, {
      data: {
        mobileLine,
      },
    });

    firstValueFrom(deactivateESimDialog.afterClosed()).then((result: boolean) => {
      if (result) {
        this.facade.deactivateESimWearable(mobileLine);
      }
    });
  }
}
