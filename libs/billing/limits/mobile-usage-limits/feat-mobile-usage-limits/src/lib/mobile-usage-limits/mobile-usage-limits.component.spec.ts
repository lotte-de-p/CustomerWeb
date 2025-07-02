import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileUsageLimitsComponent } from './mobile-usage-limits.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MobileUsageLimitsFacade, UpdateUsageLimitsRequest } from '@billing/mobile-usage-limits/data-access';
import { FormBuilder } from '@angular/forms';
import { MobileLine } from '@billing/shared/data-access';
import {
  OUT_OF_BUNDLE,
  OUT_OF_BUNDLE_WARNING_DIALOG_DATA,
  PREMIUM_LIMITS_WARNING_DIALOG_DATA,
  THIRD_PARTY_SERVICES,
} from './mobile-usage-limits.constants';
import { LoginDetails } from '@telenet/ng-lib-ocapi';
import { RouterTestingModule } from '@angular/router/testing';

describe('FeatMobileUsageLimitsComponent', () => {
  let component: MobileUsageLimitsComponent;
  let fixture: ComponentFixture<MobileUsageLimitsComponent>;
  let mobileUsageLimitsFacade: MobileUsageLimitsFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        StoreModule.forRoot({}),
        EffectsModule.forRoot({}),
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        {
          provide: 'Window',
          useValue: {
            location: {
              href: 'someUrl',
            },
          },
        },
        FormBuilder,
        TranslateService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileUsageLimitsComponent);
    mobileUsageLimitsFacade = TestBed.inject(MobileUsageLimitsFacade);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify role is member after logging in', () => {
    const loginDetails = new LoginDetails(200);
    loginDetails.role = 'MEMBER';
    component.initAfterLoggedIn(loginDetails);
    expect(component.isMember).toBe(true);
  });

  it('should verify role is manager after logging in', () => {
    const loginDetails = new LoginDetails(200);
    loginDetails.role = 'MANAGER';
    component.initAfterLoggedIn(loginDetails);
    expect(component.isMember).toBe(false);
  });

  it('should call loadMobileUsageLimits and loadOutOfBundleLimits methods when selecting a mobile line', () => {
    jest.spyOn(mobileUsageLimitsFacade, 'loadMobileUsageLimits');
    jest.spyOn(mobileUsageLimitsFacade, 'loadOutOfBundleLimits');
    const resetMobileUsageLimitsSpy = jest.spyOn(mobileUsageLimitsFacade, 'resetMobileUsageLimits');
    const mobileLine: MobileLine = { name: 'Joe Doe', msisdn: '0467713829', isDataOnly: false };
    component.onSelectMobileLine(mobileLine);
    expect(mobileUsageLimitsFacade.loadMobileUsageLimits).toHaveBeenCalledWith({ mobileLine });
    expect(resetMobileUsageLimitsSpy).not.toHaveBeenCalled();
    component.mobileUsageLimitsLoaded$.subscribe((loaded) => {
      if (loaded && component.currentUsageLimits?.outOfBundle) {
        expect(mobileUsageLimitsFacade.loadOutOfBundleLimits).toHaveBeenCalledWith({ mobileLine });
      }
    });
  });

  it('should handle onSelectMobileLine if mobile is activation in progress', () => {
    const mobileLine: MobileLine = {
      name: 'Joe Doe',
      msisdn: '0467713829',
      isDataOnly: false,
      status: 'ACTIVATION_IN_PROGRESS',
    };
    const resetMobileUsageLimitsSpy = jest.spyOn(mobileUsageLimitsFacade, 'resetMobileUsageLimits');
    const loadMobileUsageLimitsSpy = jest.spyOn(mobileUsageLimitsFacade, 'loadMobileUsageLimits');
    const loadOutOfBundleLimitsSpy = jest.spyOn(mobileUsageLimitsFacade, 'loadOutOfBundleLimits');

    component.onSelectMobileLine(mobileLine);

    expect(component.selectedMobileLine).toEqual(mobileLine);
    expect(resetMobileUsageLimitsSpy).toHaveBeenCalled();
    expect(loadMobileUsageLimitsSpy).not.toHaveBeenCalled();
    expect(loadOutOfBundleLimitsSpy).not.toHaveBeenCalled();
  });

  it('should call updateMobileUsageLimits method when submit is called', () => {
    jest.spyOn(component, 'setUpdateMobileUsageLimitsRequest').mockReturnValue({} as UpdateUsageLimitsRequest);
    jest.spyOn(mobileUsageLimitsFacade, 'updateMobileUsageLimits');
    component.selectedMobileLine = { name: 'Test', msisdn: '0467713892', isDataOnly: false, status: 'ACTIVE' };
    component.saveData(true);
    expect(mobileUsageLimitsFacade.updateMobileUsageLimits).toHaveBeenCalled();
  });

  it('should not show out-of-bundle limit if updated limits is empty', () => {
    component.updateOOBLimits({ limits: '' });
    expect(component.showOutOfBundleLimit).toBe(false);
  });

  it('should update premium limits data and call submit', () => {
    component.updatePremiumLimits({ updatedLimit: '20' });
    expect(component.updatedPremiumLimitsData).toEqual('20');
  });

  it('should not update premium limits data if cancelled', () => {
    component.updatePremiumLimits({ updatedLimit: '' });
    expect(component.updatedPremiumLimitsData).toEqual('');
    expect(component.showPremiumServices).toBe(false);
  });

  it('should call updateMobileUsageDataLayerEvent and patchValue with correct values for out of bundle limit', () => {
    const updateMobileUsageDataLayerEventSpy = jest.spyOn(mobileUsageLimitsFacade, 'updateMobileUsageDataLayerEvent');
    component.updatedOutOfLimitsData = '';
    component.handleLimits('20', 'Out of Bundle');
    expect(updateMobileUsageDataLayerEventSpy).toHaveBeenCalledWith({
      limitAlreadyExceeded: false,
      updateDeclined: true,
      cancelledLimit: '20',
      itemName: 'Out of Bundle',
    });
  });

  it('should set showOutOfBundleLimit to true when status is true and section is OUT_OF_PLAN_LIMIT_SECTION_KEY', () => {
    component.showManageLimit(true, 'out-of-plan');
    expect(component.showOutOfBundleLimit).toBe(true);
    expect(component.showPremiumServices).toBe(false);
  });

  it('should set showPremiumServices to true when status is true and section is PREMIUM_LIMIT_SECTION_KEY', () => {
    component.showManageLimit(true, 'premium-services');
    expect(component.showPremiumServices).toBe(true);
    expect(component.showOutOfBundleLimit).toBe(false);
  });

  it('should not set any flags when status is false', () => {
    component.showManageLimit(false, 'out-of-plan');
    expect(component.showOutOfBundleLimit).toBe(false);
    component.showManageLimit(false, 'premium-services');
    expect(component.showPremiumServices).toBe(false);
  });

  it('should not set any flags when section is not recognized', () => {
    component.showManageLimit(true, 'UNKNOWN_SECTION_KEY');
    expect(component.showOutOfBundleLimit).toBe(false);
    expect(component.showPremiumServices).toBe(false);
  });

  it('should call handleLimits and set showLimit to true when isSelectedLimitLessThanCurrentUsage returns true', () => {
    const handleLimitsSpy = jest.spyOn(component, 'handleLimits');
    const isSelectedLimitLessThanCurrentUsageSpy = jest
      .spyOn(component, 'isSelectedLimitLessThanCurrentUsage')
      .mockReturnValue(true);
    component.handleLimitIfLessThanCurrentUsage(
      '10',
      OUT_OF_BUNDLE_WARNING_DIALOG_DATA,
      OUT_OF_BUNDLE,
      'showOutOfBundleLimit',
      15
    );
    expect(isSelectedLimitLessThanCurrentUsageSpy).toHaveBeenCalledWith('10', OUT_OF_BUNDLE_WARNING_DIALOG_DATA, 15);
    expect(handleLimitsSpy).toHaveBeenCalledWith('10', OUT_OF_BUNDLE);
    expect(component.showOutOfBundleLimit).toBe(true);
  });

  describe('warningDialogEvent', () => {
    it('should call saveDataIfLineSelected when status is true', () => {
      const saveDataIfLineSelectedSpy = jest.spyOn(component, 'saveDataIfLineSelected');
      component.warningDialogEvent(true);
      expect(saveDataIfLineSelectedSpy).toHaveBeenCalled();
    });

    it('should call handleLimitIfLessThanCurrentUsage with correct parameters when status is false', () => {
      const handleLimitIfLessThanCurrentUsageSpy = jest.spyOn(component, 'handleLimitIfLessThanCurrentUsage');
      component.updatedOutOfLimitsData = '10';
      component.updatedPremiumLimitsData = '20';
      component.currentUsageLimits = {
        outOfBundle: { currentUsage: 15, limit: { enabled: true, value: 10 } },
        premiumService: { currentUsage: 25, limit: { enabled: true, value: 20 } },
      };
      component.warningDialogEvent(false);
      expect(handleLimitIfLessThanCurrentUsageSpy).toHaveBeenCalledWith(
        '10',
        OUT_OF_BUNDLE_WARNING_DIALOG_DATA,
        OUT_OF_BUNDLE,
        'showOutOfBundleLimit',
        15
      );
      expect(handleLimitIfLessThanCurrentUsageSpy).toHaveBeenCalledWith(
        '20',
        PREMIUM_LIMITS_WARNING_DIALOG_DATA,
        THIRD_PARTY_SERVICES,
        'showPremiumServices',
        25
      );
    });
  });

  it('should set premium warning details correctly', () => {
    const expectedWarningDialogData = {
      warningText: PREMIUM_LIMITS_WARNING_DIALOG_DATA[0],
      warningDetails: PREMIUM_LIMITS_WARNING_DIALOG_DATA[1],
      confirmButtonText: PREMIUM_LIMITS_WARNING_DIALOG_DATA[2],
      cancelButtonText: PREMIUM_LIMITS_WARNING_DIALOG_DATA[3],
    };

    component.setWarningLabels(PREMIUM_LIMITS_WARNING_DIALOG_DATA);

    expect(component.warningDialogData).toEqual(expectedWarningDialogData);
  });

  it('should set OOB warning details correctly', () => {
    const expectedWarningDialogData = {
      warningText: OUT_OF_BUNDLE_WARNING_DIALOG_DATA[0],
      warningDetails: OUT_OF_BUNDLE_WARNING_DIALOG_DATA[1],
      confirmButtonText: OUT_OF_BUNDLE_WARNING_DIALOG_DATA[2],
      cancelButtonText: OUT_OF_BUNDLE_WARNING_DIALOG_DATA[3],
    };

    component.setWarningLabels(OUT_OF_BUNDLE_WARNING_DIALOG_DATA);

    expect(component.warningDialogData).toEqual(expectedWarningDialogData);
  });

  describe('saveDataIfLineSelected', () => {
    it('should call saveData when selectedMobileLine is not null', () => {
      const saveDataSpy = jest.spyOn(component, 'saveData');
      component.selectedMobileLine = { name: 'Test', msisdn: '0467713892', isDataOnly: false, status: 'ACTIVE' };
      component.saveDataIfLineSelected();
      expect(saveDataSpy).toHaveBeenCalledWith(true);
    });

    it('should not call saveData when selectedMobileLine is null', () => {
      const saveDataSpy = jest.spyOn(component, 'saveData');
      component.selectedMobileLine = null;
      component.saveDataIfLineSelected();
      expect(saveDataSpy).not.toHaveBeenCalled();
    });
  });

  describe('submit', () => {
    it('should set showWarningDialog to true and showOutOfBundleLimit and showPremiumServices to false when isSelectedLimitLessThanCurrentUsage returns true', () => {
      const isSelectedLimitLessThanCurrentUsageSpy = jest
        .spyOn(component, 'isSelectedLimitLessThanCurrentUsage')
        .mockReturnValue(true);
      component.currentUsageLimits = {
        outOfBundle: { currentUsage: 15, limit: { enabled: true, value: 10 } },
        premiumService: { currentUsage: 25, limit: { enabled: true, value: 20 } },
      };
      component.submit();
      expect(isSelectedLimitLessThanCurrentUsageSpy).toHaveBeenCalledTimes(1);
      expect(component.showWarningDialog).toBe(true);
      expect(component.showOutOfBundleLimit).toBe(false);
      expect(component.showPremiumServices).toBe(false);
    });

    it('should call saveData when isSelectedLimitLessThanCurrentUsage returns false and selectedMobileLine is not null', () => {
      const isSelectedLimitLessThanCurrentUsageSpy = jest
        .spyOn(component, 'isSelectedLimitLessThanCurrentUsage')
        .mockReturnValue(false);
      const saveDataSpy = jest.spyOn(component, 'saveData');
      component.selectedMobileLine = { name: 'Test', msisdn: '0467713892', isDataOnly: false, status: 'ACTIVE' };
      component.submit();
      expect(isSelectedLimitLessThanCurrentUsageSpy).toHaveBeenCalledTimes(2);
      expect(saveDataSpy).toHaveBeenCalledWith(false);
    });

    it('should not throw error when currentUsageLimits is null', () => {
      const isSelectedLimitLessThanCurrentUsageSpy = jest
        .spyOn(component, 'isSelectedLimitLessThanCurrentUsage')
        .mockReturnValue(false);
      const saveDataSpy = jest.spyOn(component, 'saveData');
      component.selectedMobileLine = { name: 'Test', msisdn: '0467713892', isDataOnly: false, status: 'ACTIVE' };
      component.currentUsageLimits = null;
      component.submit();
      expect(isSelectedLimitLessThanCurrentUsageSpy).toHaveBeenCalledTimes(2);
      expect(saveDataSpy).toHaveBeenCalledWith(false);
    });
  });
});
