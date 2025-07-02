import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { MobileService } from './mobile.service';
import { SimDetailsModel } from '../../models/sim-details.model';
import { SimDetailsMapper } from '../../mappers/sim-details/sim-details.mapper';
import { expect, jest } from '@jest/globals';
import { SimSwapMapper } from '../../../../fleet-contact/create-line/mappers/sim-swap.mapper';
import { ActivateSimRequestInterface } from '../../interfaces/activate-sim-request.interface';
import { PostRequestSuccessInterface } from '../../interfaces/post-request-success.interface';
import { PostRequestSuccessMapper } from '../../mappers/post-request-success-mapper';
import { SimActivationStatusInterface } from '../../interfaces/sim-activation-status.interface';
import { SimActivationStatusMapper } from '../../mappers/sim-activation/sim-activation-status.mapper';

describe('MobileService', () => {
  const messageGroup = 'sales';
  let mobileService: MobileService, ocapiService: OcapiService;
  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [OcapiService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    ocapiService = TestBed.inject(OcapiService);
    mobileService = TestBed.inject(MobileService);
  });

  describe('getSimDetailsByMsisdn', () => {
    it('should call the ocapi mobile service with params', () => {
      const simDetails = [
        {
          sim: '8932030003205612876',
          puk: '09049463',
          status: 'Active',
        },
      ];
      const msisdn = '046782912';
      const simDetailsResponse$ = of(<SimDetailsModel[]>simDetails);
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(simDetailsResponse$);
      mobileService.getSimDetailsByMsisdn(messageGroup, msisdn).subscribe((response: SimDetailsModel[]) => {
        expect(response[0].sim).toBe(simDetails[0].sim);
        expect(response[0].puk).toBe(simDetails[0].puk);
        expect(response[0].status).toBe(simDetails[0].status);
      });
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: messageGroup,
          endpoint: `/public/api/mobile-service/v2/simdetails?msisdn=${msisdn}`,
          mapper: expect.any(SimDetailsMapper),
        })
      );
    });
  });

  describe('validateSimIccid', () => {
    it('should call the ocapi validate sim service with params', () => {
      const simDetails = {
        sim: '8932030003205612876',
        puk: '09049463',
        status: 'Active',
      };
      const iccid = '046782912';
      const simDetailsResponse$ = of(<SimDetailsModel>simDetails);
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(simDetailsResponse$);
      mobileService.validateSimIccid(messageGroup, iccid).subscribe((response: SimDetailsModel) => {
        expect(response.sim).toBe(simDetails.sim);
        expect(response.puk).toBe(simDetails.puk);
        expect(response.status).toBe(simDetails.status);
      });
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: messageGroup,
          endpoint: `/public/api/mobile-service/v1/simcards/046782912/validation`,
          mapper: expect.any(SimSwapMapper),
        })
      );
    });
  });

  describe('activateSim', () => {
    it('should call the ocapi service activate sim with params', () => {
      const msisdn = '0477777777';
      const activateSimRequest: ActivateSimRequestInterface = {
        iccid: '4654654654654',
        orderNumber: '4164654654',
      };
      const activateSimResponse$: Observable<PostRequestSuccessInterface> = of({
        status: 1,
      });
      jest.spyOn(ocapiService, 'doPost').mockReturnValue(activateSimResponse$);

      mobileService
        .activateSim(messageGroup, msisdn, activateSimRequest)
        .subscribe((res: PostRequestSuccessInterface) => {
          expect(res.status).toBe(1);
        });

      expect(ocapiService.doPost).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: messageGroup,
          endpoint: `/public/api/mobile-service/v2/subscriptions/0477777777/simcard/triggeractivation`,
          mapper: expect.any(PostRequestSuccessMapper),
          data: activateSimRequest,
        })
      );
    });
  });

  describe('simActivationStatus', () => {
    it('should call the ocapi service sim activation status with params', () => {
      const msisdn = '0477777777';
      const orderNumber = '004152451';
      const simActivationStatusResponse$: Observable<SimActivationStatusInterface> = of({
        status: 'Waiting',
      });
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(simActivationStatusResponse$);

      mobileService
        .getSimActivationStatus(messageGroup, msisdn, orderNumber, '123')
        .subscribe((res: SimActivationStatusInterface) => {
          expect(res.status).toBe('Waiting');
        });

      expect(ocapiService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: messageGroup,
          endpoint: `/public/api/mobile-service/v2/subscriptions/0477777777/004152451/simcard/activationstatus?token=123`,
          mapper: expect.any(SimActivationStatusMapper),
        })
      );
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
