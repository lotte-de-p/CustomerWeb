import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { SimStatusService } from './sim-status.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { expect, jest } from '@jest/globals';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { SimSwapMapper } from '../mappers/sim-swap.mapper';
import { SimDetailsModel } from '../../../shared/common/models/sim-details.model';

describe('SimStatusService', () => {
  const messageGroup = 'sales';
  let mobileService: SimStatusService, ocapiService: OcapiService;
  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [OcapiService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    ocapiService = TestBed.inject(OcapiService);
    mobileService = TestBed.inject(SimStatusService);
  });

  describe('getSimStatus', () => {
    it('should call the ocapi getSimStatus with params', () => {
      const simDetails = {
        sim: '8932030003205612876',
        puk: '09049463',
        status: 'Active',
      };
      const iccid = '046782912';
      const simDetailsResponse$ = of(<SimDetailsModel>simDetails);
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(simDetailsResponse$);
      mobileService.getSimStatus(messageGroup, iccid).subscribe((response: SimDetailsModel) => {
        expect(response.puk).toBe(simDetails.puk);
        expect(response.sim).toBe(simDetails.sim);
        expect(response.status).toBe(simDetails.status);
      });
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: messageGroup,
          endpoint: `/public/api/mobile-service/v1/simcards/046782912/status`,
          mapper: expect.any(SimSwapMapper),
        })
      );
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
