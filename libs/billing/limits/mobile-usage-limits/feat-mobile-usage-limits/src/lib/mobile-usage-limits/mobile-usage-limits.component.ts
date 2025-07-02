import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { MessageService, MessagesModule } from '@telenet/ng-lib-message';
import { TranslateModule } from '@ngx-translate/core';
import { LoginDetails, LoginModule } from '@telenet/ng-lib-ocapi';
import {
  ManageLimitsComponent,
  MemberNotificationHeaderComponent,
  MobileUsageLimitsSkeletonComponent,
  OutOfBundleLimitsDescriptionComponent,
  OutOfBundleLimitsHeaderComponent,
  PremiumServicesDescriptionComponent,
  PremiumServicesHeaderComponent,
  UpdateMobileUsageLimitsComponent,
  UpdateWarningDialogComponent,
} from '@billing/mobile-usage-limits/ui';
import {
  MobileUsageLimitsFacade,
  MobileUsageLimitsNgrxModule,
  UpdateUsageLimitsRequest,
  UsageLimits,
  WarningDialogModel,
} from '@billing/mobile-usage-limits/data-access';
import { takeUntil } from 'rxjs';
import {
  ACTIVATION_IN_PROGRESS,
  MESSAGE_GROUP_NAME,
  OUT_OF_BUNDLE,
  OUT_OF_BUNDLE_WARNING_DIALOG_DATA,
  OUT_OF_PLAN_LIMIT_SECTION_KEY,
  PREMIUM_LIMIT_SECTION_KEY,
  PREMIUM_LIMITS_WARNING_DIALOG_DATA,
  THIRD_PARTY_SERVICES,
} from './mobile-usage-limits.constants';
import { OutOfBundleLimitsDetailsComponent } from '../out-of-bundle-limits-details/out-of-bundle-limits-details.component';
import { PremiumServicesComponent } from '../premium-services/premium-services.component';
import { MobileLineSelectorComponent } from '@billing/shared/feat-mobile-line-selector';
import { MobileLine } from '@billing/shared/data-access';
import { ErrorNotificationComponent } from '@billing/shared/ui';

export const NO_LIMIT = 'NO LIMIT';

@Component({
  selector: 'care-billing-mobile-usage-limits',
  standalone: true,
  imports: [
    CommonModule,
    MessagesModule,
    MobileUsageLimitsNgrxModule,
    TranslateModule,
    MobileUsageLimitsSkeletonComponent,
    MobileLineSelectorComponent,
    LoginModule,
    OutOfBundleLimitsHeaderComponent,
    OutOfBundleLimitsDetailsComponent,
    UpdateMobileUsageLimitsComponent,
    UpdateWarningDialogComponent,
    MemberNotificationHeaderComponent,
    UpdateMobileUsageLimitsComponent,
    UpdateMobileUsageLimitsComponent,
    MobileUsageLimitsSkeletonComponent,
    PremiumServicesComponent,
    MobileLineSelectorComponent,
    ManageLimitsComponent,
    ErrorNotificationComponent,
    OutOfBundleLimitsDescriptionComponent,
    PremiumServicesDescriptionComponent,
    PremiumServicesHeaderComponent,
  ],
  templateUrl: './mobile-usage-limits.component.html',
})
export class MobileUsageLimitsComponent extends AbstractBaseComponent {
  scopes = ['D_usagelimits'];
  selectedMobileUsageLimits$ = this.mobileUsageLimitsFacade.selectedMobileUsageLimits$;
  selectedMobileLine: MobileLine | null = null;
  outOfBundleLimits$ = this.mobileUsageLimitsFacade.selectedOutOfBundleLimits$;
  outOfBundleLimitsLoaded$ = this.mobileUsageLimitsFacade.selectedOutOfBundleLimitsLoaded$;
  mobileUsageLimitsLoaded$ = this.mobileUsageLimitsFacade.selectedMobileUsageLimitsLoaded$;
  isMember: boolean;
  currentUsageLimits: UsageLimits | null;
  warningDialogData: WarningDialogModel;
  showWarningDialog = false;
  updatedOutOfLimitsData: string;
  updatedPremiumLimitsData: string;
  showOutOfBundleLimit = false;
  showPremiumServices = false;
  protected readonly MESSAGE_GROUP_NAME = MESSAGE_GROUP_NAME;

  constructor(
    private readonly mobileUsageLimitsFacade: MobileUsageLimitsFacade,
    private readonly messageService: MessageService
  ) {
    super();
  }

  initAfterLoggedIn(loginDetails: LoginDetails): void {
    this.isMember = loginDetails.isMember();
    this.selectedMobileUsageLimits$.pipe(takeUntil(this.unsubscribe$)).subscribe((currentLimit) => {
      this.currentUsageLimits = currentLimit;
    });
  }

  onSelectMobileLine(mobileLine: MobileLine | null): void {
    this.selectedMobileLine = mobileLine;
    if (mobileLine) {
      if (mobileLine.status === ACTIVATION_IN_PROGRESS) {
        this.resetLimits();
      } else {
        this.clearMessagesAndLoadLimits(mobileLine);
        this.loadOutOfBundleLimits(mobileLine);
      }
    }
  }

  loadOutOfBundleLimits(mobileLine: MobileLine): void {
    this.mobileUsageLimitsLoaded$.pipe(takeUntil(this.unsubscribe$)).subscribe((isLoaded) => {
      if (isLoaded && this.currentUsageLimits?.outOfBundle) {
        this.mobileUsageLimitsFacade.loadOutOfBundleLimits({ mobileLine });
      }
    });
  }

  clearMessagesAndLoadLimits(mobileLine: MobileLine): void {
    this.messageService.clearMessages(this.MESSAGE_GROUP_NAME);
    this.mobileUsageLimitsFacade.loadMobileUsageLimits({ mobileLine });
  }

  resetLimits(): void {
    this.mobileUsageLimitsFacade.resetMobileUsageLimits();
  }

  showManageLimit(status: boolean, section: string): void {
    if (status && section === OUT_OF_PLAN_LIMIT_SECTION_KEY) {
      this.showOutOfBundleLimit = status;
    } else if (status && section === PREMIUM_LIMIT_SECTION_KEY) {
      this.showPremiumServices = status;
    }
  }

  warningDialogEvent(status: boolean): void {
    this.showWarningDialog = false;
    if (status) {
      this.saveDataIfLineSelected();
    } else {
      this.handleLimitIfLessThanCurrentUsage(
        this.updatedOutOfLimitsData,
        OUT_OF_BUNDLE_WARNING_DIALOG_DATA,
        OUT_OF_BUNDLE,
        'showOutOfBundleLimit',
        this.currentUsageLimits?.outOfBundle?.currentUsage
      );
      this.handleLimitIfLessThanCurrentUsage(
        this.updatedPremiumLimitsData,
        PREMIUM_LIMITS_WARNING_DIALOG_DATA,
        THIRD_PARTY_SERVICES,
        'showPremiumServices',
        this.currentUsageLimits?.premiumService?.currentUsage
      );
    }
  }

  handleLimits(cancelledLimit: string, itemName: string): void {
    this.mobileUsageLimitsFacade.updateMobileUsageDataLayerEvent({
      limitAlreadyExceeded: false,
      updateDeclined: true,
      cancelledLimit: cancelledLimit,
      itemName: itemName,
    });
  }

  handleLimitIfLessThanCurrentUsage(
    updatedLimit: string,
    warningDialogData: string[],
    limitType: string,
    showLimit: string,
    currentUsage?: number
  ): void {
    if (this.isSelectedLimitLessThanCurrentUsage(updatedLimit, warningDialogData, currentUsage)) {
      this.handleLimits(updatedLimit, limitType);
      this[showLimit] = true;
    }
  }

  saveDataIfLineSelected(): void {
    if (this.selectedMobileLine) {
      this.saveData(true);
    }
  }

  submit(): void {
    if (
      this.isSelectedLimitLessThanCurrentUsage(
        this.updatedOutOfLimitsData,
        OUT_OF_BUNDLE_WARNING_DIALOG_DATA,
        this.currentUsageLimits?.outOfBundle?.currentUsage
      ) ||
      this.isSelectedLimitLessThanCurrentUsage(
        this.updatedPremiumLimitsData,
        PREMIUM_LIMITS_WARNING_DIALOG_DATA,
        this.currentUsageLimits?.premiumService?.currentUsage
      )
    ) {
      this.showWarningDialog = true;
      this.showOutOfBundleLimit = false;
      this.showPremiumServices = false;
    } else {
      if (this.selectedMobileLine) {
        this.saveData(false);
      }
    }
  }

  public saveData(showWarning: boolean): void {
    this.messageService.clearMessages(MESSAGE_GROUP_NAME);
    const limitRequest = this.setUpdateMobileUsageLimitsRequest();
    if (this.selectedMobileLine) {
      this.mobileUsageLimitsFacade.updateMobileUsageLimits({
        updateUsageLimitsRequest: limitRequest,
        mobileLine: this.selectedMobileLine,
      });
      this.mobileUsageLimitsFacade.updateMobileUsageDataLayerEvent({
        limitAlreadyExceeded: showWarning,
        updateDeclined: false,
      });
      this.showWarningDialog = false;
      this.showOutOfBundleLimit = false;
      this.showPremiumServices = false;
    }
  }

  setUpdateMobileUsageLimitsRequest(): UpdateUsageLimitsRequest {
    const request: UpdateUsageLimitsRequest = {} as UpdateUsageLimitsRequest;
    if (this.updatedOutOfLimitsData) {
      request.outOfBundleLimit = {
        enabled: this.updatedOutOfLimitsData !== NO_LIMIT,
        value: this.updatedOutOfLimitsData !== NO_LIMIT ? parseInt(this.updatedOutOfLimitsData) : undefined,
      };
    }
    if (this.updatedPremiumLimitsData) {
      request.premiumServiceLimit = { value: parseInt(this.updatedPremiumLimitsData) };
    }
    return request;
  }

  updateOOBLimits({ limits }: { limits: string }): void {
    this.updatedOutOfLimitsData = limits;
    if (limits) {
      this.submit();
    } else {
      this.showOutOfBundleLimit = false;
    }
  }

  updatePremiumLimits({ updatedLimit }: { updatedLimit: string }): void {
    this.updatedPremiumLimitsData = updatedLimit;
    if (updatedLimit) {
      this.submit();
    } else {
      this.showPremiumServices = false;
    }
  }

  isSelectedLimitLessThanCurrentUsage(
    updatedLimit: string,
    warningDialogData: string[],
    currentUsage?: number
  ): boolean {
    const isLimitLess = !!(
      updatedLimit &&
      currentUsage &&
      updatedLimit !== '' &&
      +updatedLimit < +Math.trunc(currentUsage)
    );
    if (isLimitLess) {
      this.setWarningLabels(warningDialogData);
    }
    return isLimitLess;
  }

  setWarningLabels(warningDialogData: string[]): void {
    this.warningDialogData = {
      warningText: warningDialogData[0],
      warningDetails: warningDialogData[1],
      confirmButtonText: warningDialogData[2],
      cancelButtonText: warningDialogData[3],
    };
  }
}
