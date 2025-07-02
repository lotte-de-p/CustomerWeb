import { TestBed } from '@angular/core/testing';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { MockProvider } from 'ng-mocks';
import { of, take } from 'rxjs';
import { HardwareDiscount, HardwareInvoice } from '../entities/hardware-discount.interface';
import { HardwareDiscountService } from './hardware-discount.service';

describe('hardware discount service', () => {
  let service: HardwareDiscountService;
  let ocapiService: OcapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HardwareDiscountService, MockProvider(OcapiService), { provide: 'Window', useValue: {} }],
    });
    service = TestBed.inject(HardwareDiscountService);
    ocapiService = TestBed.inject(OcapiService);
  });
  it('should call discount overview', () => {
    const httpResponse: HardwareDiscount = {
      availableSlots: 0,
      totalSlots: 0,
      creditCheck: '',
      usedDiscounts: [],
    };
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(httpResponse));

    const result$ = service.loadHardwareDiscount();

    result$.pipe(take(1)).subscribe((value) => {
      expect(value).toEqual(httpResponse);
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        new OcapiCallConfig(
          'hardware-discount',
          '/public/api/customer-web-account-discount-overview-cs/v1/discount-overview'
        )
      );
    });
  });

  it('should call the hardware invoice api', () => {
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of('document'));
    service
      .getHardwareInvoice({
        billingAccountNumber: '6579123',
        documentReferenceNumber: '245900090524',
      } as HardwareInvoice)
      .subscribe((res) => {
        expect(res).toEqual('document');
        expect(ocapiService.doGet).toHaveBeenCalledWith(
          new OcapiCallConfig(
            'hardware-discount',
            '/public/api/customer-web-account-discount-overview-cs/v1/discount-overview/6579123/invoices/245900090524'
          )
        );
      });
  });
});
