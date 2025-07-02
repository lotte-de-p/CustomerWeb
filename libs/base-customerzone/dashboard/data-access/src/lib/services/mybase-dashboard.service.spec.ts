import { TestBed } from '@angular/core/testing';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { MockProvider } from 'ng-mocks';
import { of, take } from 'rxjs';
import { MyBaseDashboard } from '../entities/mybase-dashboard.interface';
import { MyBaseDashboardService } from './mybase-dashboard.service';

describe('mybase dashboard service', () => {
  let service: MyBaseDashboardService;
  let ocapiService: OcapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyBaseDashboardService, MockProvider(OcapiService), { provide: 'Window', useValue: {} }],
    });
    service = TestBed.inject(MyBaseDashboardService);
    ocapiService = TestBed.inject(OcapiService);
  });
  it('should call be', () => {
    const httpResponse: MyBaseDashboard = {
      billing: {
        showCard: true,
        pending: false,
        billingAccounts: [],
      },
      mobileUsage: {
        showCard: true,
        pending: false,
        products: [],
      },
      internetUsage: {
        showCard: true,
        pending: false,
        products: [],
      },
      homeNetwork: {
        showCard: true,
        pending: false,
      },
      products: {
        showCard: true,
        mobile: {
          pending: false,
          products: [],
        },
        dtv: {
          pending: false,
          products: [],
        },
        internet: {
          pending: false,
          products: [],
        },
      },
      actions: [],
    };
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(httpResponse));

    const result$ = service.loadMyBaseDashboard();

    result$.pipe(take(1)).subscribe((value) => {
      expect(value).toEqual(httpResponse);
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        new OcapiCallConfig('mybase-dashboard', '/public/api/mybase-dashboard-service/v1/dashboard')
      );
    });
  });
});
