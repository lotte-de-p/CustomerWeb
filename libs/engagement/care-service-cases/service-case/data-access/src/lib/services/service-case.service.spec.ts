import { ServiceCaseService } from './service-case.service';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of } from 'rxjs';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { jest } from '@jest/globals';
import { Status, Type } from '../entitities/service-case.interface';
import { ServiceCaseMapper } from './service-case.mapper';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockProvider } from 'ng-mocks';

describe('ServiceCaseService', () => {
  let service: ServiceCaseService;
  let ocapiService: OcapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceCaseService, MockProvider(OcapiService), { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ServiceCaseService);
    ocapiService = TestBed.inject(OcapiService);
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(
      of([
        {
          id: '123456',
          status: Status.OPEN,
          type: Type.TAKEOVER,
          creationDate: new Date('2023-10-10T09:30:16.449Z'),
          productType: 'Internet',
        },
        {
          id: '987654',
          status: Status.RESOLVED,
          type: Type.MOVE,
          creationDate: new Date('2023-10-11T09:00:35.449Z'),
          productType: 'DTV',
        },
      ])
    );
  });

  it('should get service cases client service', async () => {
    const serviceCases = await firstValueFrom(service.load());
    expect(serviceCases.length).toBe(2);
    expect(serviceCases[0].id).toBe('123456');
    expect(serviceCases[1].id).toBe('987654');
    expect(ocapiService.doGet).toHaveBeenCalledWith(
      new OcapiCallConfig(
        'service-cases',
        '/public/api/service-cases-service/v1/service-cases',
        expect.any(ServiceCaseMapper)
      )
    );
  });
});
