import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  ALL_INCOMING_AND_OUTGOING,
  ALL_INCOMING_AND_OUTGOING_GROUP,
  BarringsToUpdate,
  MobileBarringGroup,
  MobileBarringSettings,
  MobileBarringStatus,
  MobileBarrings,
  MobileBarringsDatalayer,
  MobileBarringsDatalayerFacade,
  MobileBarringsFacade,
  MyBaseDashoardNgrxModule,
  UpdateMobileBarrings,
} from '@billing/barrings/mobile-barrings/data-access';
import { MobileLine } from '@billing/shared/data-access';
import { MobileLineSelectorComponent } from '@billing/shared/feat-mobile-line-selector';
import { TranslateModule } from '@ngx-translate/core';
import { LoginModule, UserDetailsService } from '@telenet/ng-lib-ocapi';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { combineLatest, map, switchMap, takeUntil } from 'rxjs';
import { BarringComponent } from './barring/barring.component';
import { ErrorNotificationComponent } from '@billing/shared/ui';

@Component({
  selector: 'tg-mobile-barrings',
  standalone: true,
  imports: [
    MyBaseDashoardNgrxModule,
    CommonModule,
    BarringComponent,
    LoginModule,
    MobileLineSelectorComponent,
    TranslateModule,
    ErrorNotificationComponent,
  ],
  templateUrl: './mobile-barrings.component.html',
  styleUrl: './mobile-barrings.component.scss',
})
export class MobileBarringsComponent extends AbstractBaseComponent {
  private readonly facade: MobileBarringsFacade = inject(MobileBarringsFacade);
  protected readonly userDetailsService = inject(UserDetailsService);
  private readonly datalayerFacade = inject(MobileBarringsDatalayerFacade);
  scopes = ['barringsettings'];
  mobileBarringGroups$ = this.facade.mobileBarringGroups$;
  mobileBarringReadOnly$ = this.facade.mobileBarringReadOnly$;
  mobileBarringProductStatus$ = this.facade.mobileBarringProductStatus$;
  mobileBarringsLoading$ = this.facade.loadingState$;
  mobileBarringError$ = this.facade.mobileBarringError$;
  mobileBarringGroups!: MobileBarringGroup[];
  originalMobileBarringGroups!: MobileBarringGroup[];
  saveSuccessful = false;
  isReadOnly = false;
  errorOnSave = false;
  savedBarring = true;
  barringGroupOrder = {
    general: 1,
    roaming: 2,
    'premium-voice': 3,
    'premium-sms': 4,
    'pay-by-mobile': 5,
  };
  globalBarringEnabled = false;
  originalValueOfGeneralBarring!: boolean;
  bannerLinkClicked = false;
  suspendedNumber = false;
  showGlobalBarringEnabledMessage = false;

  initAfterLoggedIn() {
    this.datalayerFacade.initDataLayer();
    this.obs(this.mobileBarringReadOnly$)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((readOnly) => {
        this.isReadOnly = readOnly;
        if (this.isReadOnly) {
          const analyticsEvent: MobileBarringsDatalayer = {
            eventName: 'message banner',
            eventType: 'view-banner',
            attributeName: 'member message',
            attributeData: 'info',
          };
          this.addAnalyticsEvent(analyticsEvent);
        }
      });
    this.obs(this.mobileBarringGroups$)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((groups) => {
        const groupsCheckedWithFraud = this.checkFraud(groups);
        this.originalMobileBarringGroups = groupsCheckedWithFraud;
        this.mobileBarringGroups = JSON.parse(JSON.stringify(groupsCheckedWithFraud));

        // we have to track the original value of general barring because of the second window that needs to open
        this.originalValueOfGeneralBarring = this.checkForGlobalSetting();
        this.globalBarringEnabled = this.checkForGlobalSetting();
        this.showGlobalBarringEnabledMessage = this.checkForGlobalSetting();
      });
    this.obs(this.mobileBarringProductStatus$)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((productStatus) => {
        this.suspendedNumber = productStatus === MobileBarringStatus.SUSPENDED_STATUS;
      });
  }

  onSelectMobileLine(mobileLine: MobileLine): void {
    if (mobileLine) {
      this.facade.setSelectedMobileLine(mobileLine);
      this.errorOnSave = false;
      this.saveSuccessful = false;
    }
  }

  toggleBarring(data: { setting: MobileBarringSettings; groupCode: string }) {
    // this stupid boolean is making sure the barring component does not update when doing stuff in selector
    this.savedBarring = false;
    const newRefGroup: MobileBarringGroup[] = JSON.parse(JSON.stringify(this.mobileBarringGroups));
    const affectedGroup = newRefGroup.find((group) => group.code === data.groupCode);
    if (affectedGroup) {
      const setting = affectedGroup.barringSettings.find((set) => set.id === data.setting.id);
      if (setting) {
        setting.isBarred = !setting?.isBarred;
        if (setting.isBarred && setting.mutualExclusiveBarringIds?.length) {
          setting.mutualExclusiveBarringIds.forEach((exBarId) => {
            newRefGroup.forEach((group) => {
              group.barringSettings.forEach((set) => {
                if (set.id === exBarId) {
                  set.isBarred = false;
                }
              });
            });
          });
        }
      }
    }
    this.mobileBarringGroups = newRefGroup;
    this.globalBarringEnabled = this.checkForGlobalSetting();
  }

  checkFraud(groups: MobileBarringGroup[]): MobileBarringGroup[] {
    const groupsCheckedForFraud: MobileBarringGroup[] = JSON.parse(JSON.stringify(groups));
    let fraudIds: string[] = [];
    groupsCheckedForFraud.forEach((group: MobileBarringGroup) => {
      group.barringSettings.forEach((set) => {
        if (set.isSetByFraudManager) {
          fraudIds = [...fraudIds, set.id];
          if (set.mutualExclusiveBarringIds?.length) {
            fraudIds = [...fraudIds, ...set.mutualExclusiveBarringIds];
          }
        }
      });
    });
    groupsCheckedForFraud.forEach((gr: MobileBarringGroup) => {
      gr.disabledByFraud = gr.barringSettings.some((set) => fraudIds.includes(set.id));
    });
    return groupsCheckedForFraud;
  }

  checkForGlobalSetting(): boolean {
    return (
      this.mobileBarringGroups
        .find((gr) => gr.code === ALL_INCOMING_AND_OUTGOING_GROUP)
        ?.barringSettings.find((set) => set.code === ALL_INCOMING_AND_OUTGOING)?.isBarred ?? false
    );
  }

  cancel() {
    this.mobileBarringGroups = JSON.parse(JSON.stringify(this.originalMobileBarringGroups));
    this.globalBarringEnabled = this.checkForGlobalSetting();
    this.bannerLinkClicked = false;
  }

  openGeneral(event: Event) {
    event.stopPropagation();
    this.bannerLinkClicked = true;
  }

  addAnalyticsEvent(event: MobileBarringsDatalayer) {
    this.datalayerFacade.sendDatalayerEvent(event);
  }

  save() {
    this.facade.triggerLoading(true);
    this.saveSuccessful = false;
    this.errorOnSave = false;
    this.savedBarring = true;
    window.scrollTo(0, 0);

    const barringsToSave: BarringsToUpdate[] = [];
    this.mobileBarringGroups.forEach((group) => {
      const originalGroup = this.originalMobileBarringGroups.find((ori) => ori.code === group.code);
      group.barringSettings.forEach((setting) => {
        const original = originalGroup?.barringSettings.find((set) => set.id === setting.id);
        if (original && original.isBarred !== setting.isBarred) {
          barringsToSave.push({
            id: setting.id,
            isBarred: setting.isBarred,
          });
        }
      });
    });

    const payload = {
      updateBarringSettings: barringsToSave,
      advisorId: undefined,
    } as UpdateMobileBarrings;

    const selectedMobileLine$ = this.facade.selectMobileBarringSelectedMobileLine$;
    const advisorId$ = this.userDetailsService.getUserDetails().pipe(map((details) => details.advisorId));

    combineLatest([selectedMobileLine$, advisorId$])
      .pipe(
        switchMap(([selectedMobileLine, advisorId]) => {
          payload.advisorId = advisorId;
          return this.facade.updateBarrings(payload, selectedMobileLine.msisdn);
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe({
        next: (response) => {
          this.saveSuccessful = true;
          const barrings: MobileBarrings = {
            barringGroups: response?.barringGroups,
            updatable: response?.updatable,
            productName: response?.productName,
            productStatus: response?.productStatus,
          };
          this.facade.setMobileBarrings(barrings);
        },
        error: () => {
          this.errorOnSave = true;
          this.savedBarring = false;
          this.facade.triggerLoading(false);
          this.mobileBarringGroups = JSON.parse(JSON.stringify(this.originalMobileBarringGroups));
        },
      });
  }
}
