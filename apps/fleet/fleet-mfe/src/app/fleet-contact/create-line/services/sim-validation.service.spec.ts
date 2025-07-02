import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { SimValidationService } from './sim-validation.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { expect, jest } from '@jest/globals';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { SimSwapMapper } from '../mappers/sim-swap.mapper';
import { SimDetailsModel } from '../../../shared/common/models/sim-details.model';

describe('SimValidationService', () => {
  const messageGroup = 'sales';
  let mobileService: SimValidationService, ocapiService: OcapiService;
  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [OcapiService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    ocapiService = TestBed.inject(OcapiService);
    mobileService = TestBed.inject(SimValidationService);
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

  afterEach(() => {
    cleanStylesFromDom();
  });
});
