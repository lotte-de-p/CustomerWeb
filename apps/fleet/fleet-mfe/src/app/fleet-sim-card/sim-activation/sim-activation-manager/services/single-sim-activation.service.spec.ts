import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { DatePipe } from '@angular/common';
import { of } from 'rxjs';
import { SingleSimActivationService } from './single-sim-activation.service';
import { PostRequestSuccessMapper } from '../../../../shared/common/mappers/post-request-success-mapper';
import { SingleSimActivationRequest } from '../model/sim-activation.model';
import { expect, jest } from '@jest/globals';

describe('SingleSimActivationService', () => {
  let service: SingleSimActivationService;
  let ocapiService: OcapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        OcapiService,
        DatePipe,
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    });
    service = TestBed.inject(SingleSimActivationService);
    ocapiService = TestBed.inject(OcapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Activate sim card', () => {
    it('Given MSISDN and activation date, activation should succeed', () => {
      const msisdn: SingleSimActivationRequest[] = [
        {
          msisdnList: [{ msisdn: 'someMsisdn' }],
          futureDate: new Date('2022-08-30T04:18:15.668Z'),
          iccid: 'iccid',
        },
      ];

      const mockResponse = { status: 200 };
      jest.spyOn(ocapiService, 'doPost').mockReturnValue(of(mockResponse));
      service.activateSim(msisdn[0].msisdnList, msisdn[0].futureDate, msisdn[0].iccid).subscribe((actual) => {
        expect(actual).toBe(mockResponse);
        expect(ocapiService.doPost).toHaveBeenCalledWith(
          jasmine.objectContaining({
            messageGroupName: 'activate-sim',
            endpoint: `/public/api/mobile-service/v2/subscriptions/simcard/activation`,
            mapper: jasmine.any(PostRequestSuccessMapper),
            data: msisdn[0],
          })
        );
      });
    });
  });
});
