import { BarringStatusService } from './barring-status.service';
import { of } from 'rxjs';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BarringStatusService', () => {
  let service: BarringStatusService;
  let ocapiService: OcapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcapiService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    ocapiService = TestBed.inject(OcapiService);
    service = TestBed.inject(BarringStatusService);
  });

  it('should get barring status for msisdn', () => {
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of({ barred: true }));
    const ocapiCallConfig = new OcapiCallConfig(
      'pay-by-mobile',
      '/public/api/pay-by-mobile-service/v1/pay-by-mobile/barring-status/someMsisdn'
    );

    const actual$ = service.getBarringStatus('someMsisdn');
    expect(ocapiService.doGet).toHaveBeenCalledWith(ocapiCallConfig);
    actual$.subscribe((response) => expect(response).toBe({ barred: true }));
  });
});
