import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { SimDetailsService } from './sim-details.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { expect, jest } from '@jest/globals';
import { SimDetailsMapper } from '../../mappers/sim-details/sim-details.mapper';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { SimDetailsModel } from '../../models/sim-details.model';

describe('SimDetailsService', () => {
  const messageGroup = 'sales';
  let simDetailsService: SimDetailsService, ocapiService: OcapiService;
  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [OcapiService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    ocapiService = TestBed.inject(OcapiService);
    simDetailsService = TestBed.inject(SimDetailsService);
  });

  describe('getSimDetailsByMsisdn', () => {
    it('should call the ocapi mobile service with params', (done) => {
      const simDetails = [
        {
          sim: '8932030003205612876',
          puk: '09049463',
          status: 'Active',
          simType: 'E_SIM',
        },
      ];
      const msisdn = '046782912';
      const simDetailsResponse$ = of(<SimDetailsModel[]>simDetails);
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(simDetailsResponse$);
      simDetailsService.getSimDetailsByMsisdn(messageGroup, msisdn).subscribe((response: SimDetailsModel[]) => {
        expect(response[0].sim).toBe(simDetails[0].sim);
        expect(response[0].puk).toBe(simDetails[0].puk);
        expect(response[0].status).toBe(simDetails[0].status);
        expect(response[0].simType).toBe(simDetails[0].simType);
        done();
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

  afterEach(() => {
    cleanStylesFromDom();
  });
});
