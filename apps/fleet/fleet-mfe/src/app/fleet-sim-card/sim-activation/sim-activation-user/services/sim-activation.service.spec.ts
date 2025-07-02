import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

import { HttpErrorResponse, HttpEventType, HttpHeaders } from '@angular/common/http';
import { SimActivationService } from './sim-activation.service';
import { SimActivationViewModel } from '../model/sim-activation.view-model';
import { SimActivationUserConstants } from '../constants/sim-activation-user.constants';
import { jest, expect } from '@jest/globals';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { RecaptchaService } from '../../../../shared/common/services/recaptcha/recaptcha.service';
import { MobileService } from '../../../../shared/common/services/mobile/mobile.service';

describe('SimActivationService', () => {
  let simActivationService: SimActivationService;
  let ocapiService: OcapiService;
  let recaptchaService: RecaptchaService;
  let mobileService: MobileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: window }],
      imports: [HttpClientTestingModule],
    });
    ocapiService = TestBed.inject(OcapiService);
    simActivationService = TestBed.inject(SimActivationService);
    recaptchaService = TestBed.inject(RecaptchaService);
    mobileService = TestBed.inject(MobileService);
  });

  describe('activateSim', () => {
    it('should get sim activation status and handle error', waitForAsync(() => {
      const msisdn = '32479885544';
      const orderNumber = '123456';
      const token = '123456';

      jest.spyOn(recaptchaService, 'getRecaptchaToken').mockReturnValueOnce(of(token));
      jest
        .spyOn(mobileService, 'getSimActivationStatus')
        .mockReturnValueOnce(throwError(() => ({ error: { code: 'OCAPI-ACT-427' } })));

      simActivationService.getSimActivationStatus(msisdn, orderNumber).subscribe({
        next: () => {
          console.log('success');
        },
        error: (error: unknown) => {
          expect(error).toBe(SimActivationUserConstants.ERROR_SIM_ACTIVATION_NOT_POSSIBLE);
        },
      });
    }));

    it('should call activate sim with correct params', waitForAsync(() => {
      jest.spyOn(ocapiService, 'doPost').mockReturnValue(of({ status: 1 }));
      const vm = {
        orderNumber: '012445125',
        msisdn: '0477777777',
        simCardNumber: '12345678912345',
      } as SimActivationViewModel;

      simActivationService.activateSim(vm).subscribe(() => {
        expect(ocapiService.doPost).toBeCalled();
      });
    }));

    it('should return wrong sim card number error when mobile service returns OCAPI-VAL-422 error', waitForAsync(() => {
      const ocapiError: HttpErrorResponse = createOcapiError(
        'OCAPI-VAL-422',
        'No product found for specified ICCID-MSISDN pair'
      );
      jest.spyOn(ocapiService, 'doPost').mockReturnValue(throwError(() => ocapiError));
      const vm = {
        orderNumber: '012445125',
        msisdn: '0477777777',
        simCardNumber: '12345678912345',
      } as SimActivationViewModel;

      simActivationService.activateSim(vm).subscribe({
        error: (error: unknown) => {
          expect(error).toBe(SimActivationUserConstants.ERROR_WRONG_SIM_CARD_NUMBER);
        },
      });
    }));

    it('should return default error when mobile service returns error', waitForAsync(() => {
      const ocapiError: HttpErrorResponse = createOcapiError('OCAPI-VAL-400', 'something went wrong');
      jest.spyOn(ocapiService, 'doPost').mockReturnValue(throwError(() => ocapiError));
      const vm = {
        orderNumber: '012445125',
        msisdn: '0477777777',
        simCardNumber: '12345678912345',
      } as SimActivationViewModel;

      simActivationService.activateSim(vm).subscribe({
        error: (error: unknown) => {
          expect(error).toBe(SimActivationUserConstants.ERROR_DEFAULT);
        },
      });
    }));

    it('should return false when isSimActivated is called', () => {
      simActivationService.isSimActivated().subscribe((response) => expect(response).toBe(false));
    });
  });

  function createOcapiError(code: string, cause: string): HttpErrorResponse {
    return {
      headers: new HttpHeaders(),
      message: '',
      name: 'HttpErrorResponse',
      ok: false,
      status: 0,
      statusText: '',
      type: HttpEventType.ResponseHeader,
      url: '',
      error: {
        code: code,
        cause: cause,
      },
    };
  }
});
