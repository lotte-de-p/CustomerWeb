import { TestBed } from '@angular/core/testing';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { MockProvider } from 'ng-mocks';
import { of, take } from 'rxjs';
import { EntertainmentManagement } from '../entities/entertainment-management.interface';
import { EntertainmentManagementService } from './entertainment-management.service';

describe('hardware discount service', () => {
  let service: EntertainmentManagementService;
  let ocapiService: OcapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntertainmentManagementService, MockProvider(OcapiService), { provide: 'Window', useValue: {} }],
    });
    service = TestBed.inject(EntertainmentManagementService);
    ocapiService = TestBed.inject(OcapiService);
  });
  it('should call discount overview', () => {
    const httpResponse: EntertainmentManagement = {
      activeOptions: [],
      availableContentPacks: [
        {
          name: {
            fr: 'Streamz Base',
            nl: 'Streamz Basis',
            en: 'Streamz Basic',
          },
          weight: 10,
          logo: 'www.google.com/logo1',
        },
      ],
    };
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(httpResponse));

    const result$ = service.loadEntertainmentManagementOptions();

    result$.pipe(take(1)).subscribe((value) => {
      expect(value).toEqual(httpResponse);
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        new OcapiCallConfig(
          'entertainment-management',
          '/public/api/customer-web-account-entertainment-management-cs/v1/entertainment-options'
        )
      );
    });
  });
});
