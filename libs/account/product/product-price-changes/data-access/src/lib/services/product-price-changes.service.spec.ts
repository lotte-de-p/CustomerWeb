import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of, throwError } from 'rxjs';
import { LoginDetails, OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { jest } from '@jest/globals';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockProvider } from 'ng-mocks';
import { ProductPriceChangesService } from './product-price-changes.service';
import { ErrorMessage, MessageService } from '@telenet/ng-lib-message';
import { HttpErrorResponse } from '@angular/common/http';
import { Address, BillingFrequency, ProductPriceChangesByAccount } from '../entities/product-price-change';

const MESSAGE_GROUP = 'product-price-changes';
const PRODUCT_PRICE_CHANGES_URL = '/public/api/product-price-change-service/v1/product-price-changes';

describe('ProductPriceChangesService', () => {
  let service: ProductPriceChangesService;
  let ocapiService: OcapiService;
  let messageService: MessageService;
  const productPriceChanges: ProductPriceChangesByAccount[] = [
    {
      accountNumber: '12345',
      productPriceChanges: [
        {
          address: {
            addressId: 'addressId',
          } as Address,
          billingFrequency: BillingFrequency.MONTHLY,
          priceChange: 123.45,
          segment: 'segment',
          products: [],
          vatInclusive: true,
          priceAccordingToConsumption: true,
        },
      ],
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductPriceChangesService,
        MockProvider(OcapiService),
        MockProvider(MessageService),
        {
          provide: 'Window',
          useValue: {},
        },
      ],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductPriceChangesService);
    ocapiService = TestBed.inject(OcapiService);
    messageService = TestBed.inject(MessageService);
    jest.spyOn(ocapiService, 'doPost').mockReturnValue(of());
    jest.spyOn(messageService, 'addMessage');
  });

  it('should do the login', async () => {
    jest.spyOn(ocapiService, 'doPost').mockReturnValueOnce(of({} as LoginDetails));
    await firstValueFrom(
      service.login({
        lastName: 'lastname1',
        customerNumber: 'customernumber',
      })
    );
    const expectedOcapiCallConfig = new OcapiCallConfig(
      MESSAGE_GROUP,
      '/oauth/login?customernumber=customernumber&lastname=lastname1'
    );
    expectedOcapiCallConfig.errorHandler = expect.any(Function);
    expect(ocapiService.doPost).toHaveBeenCalledWith(expectedOcapiCallConfig);
  });

  it('should do the login but fail (wrong credentials)', (done) => {
    jest.spyOn(ocapiService, 'doPost').mockReturnValueOnce(
      throwError(
        () =>
          new HttpErrorResponse({
            error: 'error',
            status: 400,
          })
      )
    );
    service
      .login({
        lastName: 'lastname',
        customerNumber: 'customernumber',
      })
      .subscribe({
        error: () => done(),
      });
    const expectedOcapiCallConfig = new OcapiCallConfig(
      MESSAGE_GROUP,
      '/oauth/login?customernumber=customernumber&lastname=lastname'
    );
    expectedOcapiCallConfig.errorHandler = expect.any(Function);
    expect(ocapiService.doPost).toHaveBeenCalledWith(expectedOcapiCallConfig);
    expect(messageService.addMessage).toHaveBeenCalledWith(
      new ErrorMessage(MESSAGE_GROUP, 'product-price-changes.ocapi.wrong-credentials')
    );
  });

  it('should do the login but fail (other error)', (done) => {
    jest.spyOn(ocapiService, 'doPost').mockReturnValueOnce(
      throwError(
        () =>
          new HttpErrorResponse({
            error: 'error',
            status: 404,
          })
      )
    );
    service
      .login({
        lastName: 'lastname',
        customerNumber: 'customernumber',
      })
      .subscribe({
        error: () => done(),
      });
    const expectedOcapiCallConfig = new OcapiCallConfig(
      MESSAGE_GROUP,
      '/oauth/login?customernumber=customernumber&lastname=lastname'
    );
    expectedOcapiCallConfig.errorHandler = expect.any(Function);
    expect(ocapiService.doPost).toHaveBeenCalledWith(expectedOcapiCallConfig);
    expect(messageService.addMessage).toHaveBeenCalledWith(new ErrorMessage(MESSAGE_GROUP, 'ocapi.404'));
  });

  it('should get the product price changes', async () => {
    jest.spyOn(ocapiService, 'doGet').mockReturnValueOnce(of(productPriceChanges));
    const result = await firstValueFrom(service.getProductPriceChanges());
    const expectedOcapiCallConfig = new OcapiCallConfig(MESSAGE_GROUP, PRODUCT_PRICE_CHANGES_URL);
    expectedOcapiCallConfig.errorHandler = expect.any(Function);
    expect(ocapiService.doGet).toHaveBeenCalledWith(expectedOcapiCallConfig);
    expect(result).toEqual(productPriceChanges);
  });

  it('should do the login but fail (other error)', (done) => {
    jest.spyOn(ocapiService, 'doGet').mockReturnValueOnce(
      throwError(
        () =>
          new HttpErrorResponse({
            error: 'error',
            status: 404,
          })
      )
    );
    service.getProductPriceChanges().subscribe({
      error: () => done(),
    });
    const expectedOcapiCallConfig = new OcapiCallConfig(MESSAGE_GROUP, PRODUCT_PRICE_CHANGES_URL);
    expectedOcapiCallConfig.errorHandler = expect.any(Function);
    expect(ocapiService.doGet).toHaveBeenCalledWith(expectedOcapiCallConfig);
    expect(messageService.addMessage).toHaveBeenCalledWith(new ErrorMessage(MESSAGE_GROUP, 'ocapi.404'));
  });

  it('should do the login but fail (Unauthorized)', (done) => {
    jest.spyOn(ocapiService, 'doGet').mockReturnValueOnce(
      throwError(
        () =>
          new HttpErrorResponse({
            error: 'error',
            status: 403,
          })
      )
    );
    service.getProductPriceChanges().subscribe({
      error: () => done(),
    });
    const expectedOcapiCallConfig = new OcapiCallConfig(MESSAGE_GROUP, PRODUCT_PRICE_CHANGES_URL);
    expectedOcapiCallConfig.errorHandler = expect.any(Function);
    expect(ocapiService.doGet).toHaveBeenCalledWith(expectedOcapiCallConfig);
    expect(messageService.addMessage).toHaveBeenCalledWith(
      new ErrorMessage(`${MESSAGE_GROUP}.hidden`, 'ocapi.403-OCAPI-ERR-004')
    );
  });
});
