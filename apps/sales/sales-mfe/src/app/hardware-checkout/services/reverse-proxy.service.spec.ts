import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SalesOrder } from '@sales/hardware-checkout/data-access';
import { ConfigService } from '@telenet/ng-lib-config';
import { UrlService } from '@telenet/ng-lib-page';
import { ReverseProxyService } from './reverse-proxy.service';

describe('ReverseProxyService', () => {
  let service: ReverseProxyService;
  let httpMock: HttpTestingController;
  let configServiceMock: Partial<ConfigService>;
  let urlServiceMock: Partial<UrlService>;

  beforeEach(() => {
    configServiceMock = {
      getConfig: jest.fn().mockReturnValue('https://mockapi.com'),
    };

    urlServiceMock = {
      getCurrentUrl: jest.fn().mockReturnValue('https://current-url.com'),
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ReverseProxyService,
        { provide: ConfigService, useValue: configServiceMock },
        { provide: UrlService, useValue: urlServiceMock },
      ],
    });

    service = TestBed.inject(ReverseProxyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('setSalesorderAsAbandonable should make a PUT request with correct parameters', (done) => {
    const salesOrderId = '123';
    const customerId = '456';
    const basketUrl = 'https://basket-url.com';
    const expectedBody = {
      id: customerId,
      chars: {
        'eShop URL for PEGA Characteristic Involvement': basketUrl,
      },
    };

    service.setSalesorderAsAbandonable(salesOrderId, customerId, basketUrl).subscribe((response) => {
      expect(response).toBeTruthy();
      done();
    });

    const req = httpMock.expectOne(
      `https://mockapi.com/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/${salesOrderId}?isAbandonable=true`
    );
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(expectedBody);
    req.flush({} as SalesOrder); // Mock the response
  });

  it('updateCustomer should make a PUT request with correct parameters', (done) => {
    const rrn = '123';
    const cardIdNumber = '456';
    const expectedBody = {
      cardIdNumber: cardIdNumber,
      rrn: rrn,
    };

    service.updateCustomer({ cardIdNumber: cardIdNumber, rrn: rrn }).subscribe((response) => {
      expect(response).toBeTruthy();
      done();
    });

    const req = httpMock.expectOne(
      `https://mockapi.com/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/customerAccount`
    );
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(expectedBody);
    req.flush({});
  });
});
