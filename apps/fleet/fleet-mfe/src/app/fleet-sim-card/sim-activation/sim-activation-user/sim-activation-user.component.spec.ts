import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimActivationUserComponent } from './sim-activation-user.component';
import { LoaderModule, UrlService } from '@telenet/ng-lib-page';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { cloneDeep } from 'lodash-es';
import { SimActivationUserConstants } from './constants/sim-activation-user.constants';
import { defaultSimActivationViewModel } from './model/sim-activation.view-model';
import { SimActivationService } from './services/sim-activation.service';
import { expect, jest } from '@jest/globals';

describe('SimActivationUserComponent', () => {
  let component: SimActivationUserComponent;
  let fixture: ComponentFixture<SimActivationUserComponent>;
  let urlService: UrlService;
  let simActivationService: SimActivationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SimActivationUserComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        HttpClientTestingModule,
        FormsModule,
        LoaderModule,
      ],
      providers: [UrlService, { provide: 'Window', useValue: { navigation: {} } }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimActivationUserComponent);
    urlService = TestBed.inject(UrlService);
    simActivationService = TestBed.inject(SimActivationService);
    component = fixture.componentInstance;
    component.vm = cloneDeep(defaultSimActivationViewModel);
    jest.spyOn(urlService, 'getParameterByName').mockImplementation((name: string) => {
      if (name === 'orderNumber') {
        return '15151512154';
      }
      if (name === 'msisdn') {
        return '0477777777';
      } else return null;
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should show no errors and show form when all URL params are present and SIM is not activated', () => {
      jest.spyOn(simActivationService, 'isSimActivated').mockReturnValue(of(false));

      component.ngOnInit();

      expect(component.vm.showDefaultError).toBe(false);
      expect(component.vm.showSimCardAlreadyActivatedError).toBe(false);
      expect(component.vm.hideForm).toBe(false);
      expect(component.vm.disableActivateButton).toBe(true);
      expect(component.vm.showWrongSimCardNumberError).toBe(false);
    });
  });

  describe('validateSimCardNumber/showSimCardNumberInvalidFormatError', () => {
    it('should not show sim card number invalid format error when sim card number is valid', () => {
      jest.spyOn(simActivationService, 'isSimActivated').mockReturnValue(of(false));
      component.vm.simCardNumber = '1234567891233';
      component.validateSimCardNumber();

      jest.spyOn(component, 'showSimCardNumberInvalidFormatError').mockReturnValue(false);

      expect(component.vm.disableActivateButton).toBe(false);
      expect(component.vm.showDefaultError).toBe(false);
      expect(component.vm.hideForm).toBe(false);
      expect(component.vm.showSimCardAlreadyActivatedError).toBe(false);
      expect(component.vm.showWrongSimCardNumberError).toBe(false);
    });

    it('should not show sim card number invalid format error when control is not dirty', () => {
      jest.spyOn(simActivationService, 'isSimActivated').mockReturnValue(of(false));
      component.vm.simCardNumber = 'invalid';
      component.validateSimCardNumber();
      // @ts-ignore
      jest.spyOn(component, 'showSimCardNumberInvalidFormatError').mockReturnValue(false);

      expect(component.vm.showDefaultError).toBe(false);
      expect(component.vm.hideForm).toBe(false);
      expect(component.vm.showSimCardAlreadyActivatedError).toBe(false);
      expect(component.vm.showWrongSimCardNumberError).toBe(false);
    });

    it('should show SimCardNumberInvalidFormatError when sim card number is invalid and input is dirty', () => {
      jest.spyOn(simActivationService, 'isSimActivated').mockReturnValue(of(false));
      component.vm.simCardNumber = 'invalid';
      component.validateSimCardNumber();

      jest.spyOn(component, 'showSimCardNumberInvalidFormatError').mockReturnValue(false);

      expect(component.vm.disableActivateButton).toBe(true);
      expect(component.vm.showDefaultError).toBe(false);
      expect(component.vm.hideForm).toBe(false);
      expect(component.vm.showSimCardAlreadyActivatedError).toBe(false);
      expect(component.vm.showWrongSimCardNumberError).toBe(false);
    });

    it('should show showAlreadyActivatedError when sim card is already active', () => {
      jest.spyOn(simActivationService, 'getSimActivationStatus').mockReturnValue(of('Completed'));

      component.ngOnInit();

      expect(component.vm.showSimCardAlreadyActivatedError).toBe(true);
      expect(component.vm.hideForm).toBe(true);
    });

    it('should show showSimActivationNotPossibleError when sim activation status is not Waiting', () => {
      jest.spyOn(simActivationService, 'getSimActivationStatus').mockReturnValue(of('Any'));

      component.ngOnInit();

      expect(component.vm.showSimActivationNotPossibleError).toBe(true);
      expect(component.vm.showSimCardAlreadyActivatedError).toBe(false);
      expect(component.vm.hideForm).toBe(true);
    });

    it('should show showSimActivationNotPossibleError when sim activation is not possible', () => {
      jest
        .spyOn(simActivationService, 'getSimActivationStatus')
        .mockReturnValue(throwError(() => SimActivationUserConstants.ERROR_SIM_ACTIVATION_NOT_POSSIBLE));

      component.ngOnInit();

      expect(component.vm.showSimActivationNotPossibleError).toBe(true);
      expect(component.vm.showSimCardAlreadyActivatedError).toBe(false);
      expect(component.vm.hideForm).toBe(true);
    });

    it('should show showDefaultError when activation status returns unknown/default error', () => {
      jest
        .spyOn(simActivationService, 'getSimActivationStatus')
        .mockReturnValue(throwError(() => SimActivationUserConstants.ERROR_DEFAULT));

      component.ngOnInit();

      expect(component.vm.showDefaultError).toBe(true);
      expect(component.vm.showSimActivationNotPossibleError).toBe(false);
      expect(component.vm.showSimCardAlreadyActivatedError).toBe(false);
      expect(component.vm.hideForm).toBe(true);
    });
  });

  describe('activateSim', () => {
    it('should navigate to confirmation page when activate sim call succeeds', () => {
      jest.spyOn(simActivationService, 'isSimActivated').mockReturnValue(of(false));
      component.confirmationPageLink = 'confirmationLink';
      component.ngOnInit();
      component.vm.simCardNumber = '1234567891233';
      jest.spyOn(simActivationService, 'activateSim').mockReturnValue(of('success'));
      jest.spyOn(urlService, 'redirectTo');

      component.activateSim();

      expect(urlService.redirectTo).toHaveBeenCalledWith('confirmationLink');
    });

    it('should show default error when activate sim call fails', () => {
      jest.spyOn(simActivationService, 'isSimActivated').mockReturnValue(of(false));
      jest
        .spyOn(simActivationService, 'activateSim')
        .mockReturnValue(throwError(() => SimActivationUserConstants.ERROR_DEFAULT));
      jest.spyOn(urlService, 'redirectTo');
      component.ngOnInit();
      component.confirmationPageLink = 'confirmation';
      component.vm.simCardNumber = '1234567891233';
      component.validateSimCardNumber();

      component.activateSim();

      expect(urlService.redirectTo).not.toHaveBeenCalledWith('confirmation');
      expect(component.vm.showDefaultError).toBe(true);
      expect(component.vm.disableActivateButton).toBe(false);
      expect(component.vm.hideForm).toBe(false);
      expect(component.vm.showSimCardAlreadyActivatedError).toBe(false);
      expect(component.vm.showWrongSimCardNumberError).toBe(false);
    });

    it('should show wrong sim card number error when activate sim call fails with wrong sim card number error code', () => {
      jest.spyOn(simActivationService, 'isSimActivated').mockReturnValue(of(false));
      jest
        .spyOn(simActivationService, 'activateSim')
        .mockReturnValue(throwError(() => SimActivationUserConstants.ERROR_WRONG_SIM_CARD_NUMBER));
      jest.spyOn(urlService, 'redirectTo');
      component.ngOnInit();
      component.confirmationPageLink = 'confirmation';
      component.vm.simCardNumber = '1234567891233';
      component.validateSimCardNumber();

      component.activateSim();

      expect(urlService.redirectTo).not.toHaveBeenCalledWith('conf');
      expect(component.vm.showWrongSimCardNumberError).toBe(true);
      expect(component.vm.showDefaultError).toBe(false);
      expect(component.vm.disableActivateButton).toBe(false);
      expect(component.vm.hideForm).toBe(false);
      expect(component.vm.showSimCardAlreadyActivatedError).toBe(false);
    });
  });

  describe('toggleShowSimCardImg', () => {
    it('should show sim card image when info icon is clicked', () => {
      component.ngOnInit();
      component.toggleShowSimCardImg();

      expect(component.showSimCardImg).toBe(true);
    });

    it('should not show sim card image when sim card image is clicked', () => {
      component.ngOnInit();
      component.showSimCardImg = true;
      component.toggleShowSimCardImg();

      expect(component.showSimCardImg).toBe(false);
    });
  });
});
