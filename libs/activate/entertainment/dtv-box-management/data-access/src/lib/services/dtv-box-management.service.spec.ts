import { OcapiService } from '@telenet/ng-lib-ocapi';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DtvBoxManagementService } from './dtv-box-management.service';
import { of } from 'rxjs';

describe('DtvBoxManagementService', () => {
  let service: DtvBoxManagementService;
  let ocapiService: OcapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });

    ocapiService = TestBed.inject(OcapiService);
    service = TestBed.inject(DtvBoxManagementService);
  });

  it('should get addresses', (done) => {
    const mockAddresses = [
      { id: '1', street: 'address1' },
      { id: '2', street: 'address2' },
    ];
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(mockAddresses));

    service.getAddresses().subscribe((addresses) => {
      expect(addresses).toEqual(mockAddresses);
      done();
    });
  });

  it('should reset pincode', (done) => {
    const mockResponse = { status: 200 };
    jest.spyOn(ocapiService, 'doPost').mockReturnValue(of(mockResponse));

    service.resetPincode('testIdentifier').subscribe((response) => {
      expect(response).toEqual(mockResponse);
      done();
    });
  });
});
