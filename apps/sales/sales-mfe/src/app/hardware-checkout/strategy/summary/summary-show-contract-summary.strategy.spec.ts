import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { SummaryShowContractSummaryStrategy } from './summary-show-contract-summary.strategy';
import { UrlService } from '@telenet/ng-lib-page';
import { ConfigService } from '@telenet/ng-lib-config';
import { HardwareCheckoutFacade } from '../../facades/hardware-checkout.facade';
import { StoreModule } from '@ngrx/store';
import { hardwareCheckoutFeature, SalesOrder, salesOrderFactory } from '@sales/hardware-checkout/data-access';
import { contractGenerationErrorNotification, summaryFeature } from '@sales/summary/data-access';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';
import { DoneFn } from '@angular-architects/module-federation/src/server/task-queue';

@Injectable({ providedIn: 'root' })
export class MockHardwareCheckoutFacade {
  get contractSummaryUrl$(): Observable<string | undefined> {
    return of(undefined);
  }
  get contractSummaryGenerationNotPossible$(): Observable<boolean> {
    return of(false);
  }

  get salesOrderFromState$(): Observable<SalesOrder | undefined> {
    return of(undefined);
  }

  generateContractSummary = jest.fn((id) => of({ uuid: 'contacturl/' + id }));
  setContractSummaryUrl = jest.fn();
  addSummaryGeneralNotification = jest.fn();
}

describe('SummaryShowContractSummaryStrategy', () => {
  let strategy: SummaryShowContractSummaryStrategy;
  let hardwareCheckoutFacade: HardwareCheckoutFacade;
  let urlServiceSpy: jest.SpyInstance;
  let contractSummaryUrlSpy: jest.SpyInstance;
  let salesOrderFromStateSpy: jest.SpyInstance;
  let contractSummaryGenerationNotPossibleSpy: jest.SpyInstance;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot(),
        StoreModule.forFeature(hardwareCheckoutFeature),
        StoreModule.forFeature(summaryFeature),
      ],
      providers: [
        {
          provide: HardwareCheckoutFacade,
          useClass: MockHardwareCheckoutFacade,
        },
        {
          provide: 'Window',
          useValue: {
            Config: {
              'ocapi-url': 'https://api.int.telenet.be/ocapi',
              'omapi-url': 'https://api.int.telenet.be/omapi',
              'omapi-query-url': 'https://api.int.telenet.be/omapi-query/public',
              'openid-auth-url': 'https://login.int.telenet.be/openid/oauth/authorize',
              'openid-url': 'https://login.int.telenet.be/openid',
              'gateway-url': 'https://api.int.telenet.be',
              'sofy-url': 'https://int.sofy-dev.awscloud.external.telenet.be',
              'gsa-url': 'https://api.int.telenet.be/searchapi/gsa/api/',
              'openid-client-id': 'ocapi',
              'oauth-callback-url': '',
              'php-eshop-url': 'https://shop.int.telenet.be/shop/nl',
              'base-ac-systems-url': 'https://base.rest.ac-systems.com',
              'recaptcha-api-url': 'https://www.google.com/recaptcha/api.js',
              'recaptcha-site-key': '6Ld15hAbAAAAABL4l8LoTnBv-CBkhYE8Ukwc3aMQ',
              'recaptcha-v3-site-key': '6Lc2hCQbAAAAACaxx5NvByzCNYI4NSpgqsrrT4Wp',
              'is-author-mode': 'false',
              'kbc-post-message-receiver-origin-url': 'kbcPostMessageReceiverOriginUrl',
              'oauth-url-pid': 'oauthUrlPid',
              'oauth-callback-url-pid': 'oauthCallbackUrlPid',
              'search-index-parameter': 'searchIndexParameter',
            },
            open: jest.fn(),
          },
        },
      ],
    });
    const urlService = TestBed.inject(UrlService);
    const configService = TestBed.inject(ConfigService);
    hardwareCheckoutFacade = TestBed.inject(HardwareCheckoutFacade);
    strategy = new SummaryShowContractSummaryStrategy(urlService, configService, hardwareCheckoutFacade);

    urlServiceSpy = jest.spyOn(urlService, 'openNewTab');

    contractSummaryUrlSpy = jest.spyOn(hardwareCheckoutFacade, 'contractSummaryUrl$', 'get');
    contractSummaryGenerationNotPossibleSpy = jest
      .spyOn(hardwareCheckoutFacade, 'contractSummaryGenerationNotPossible$', 'get')
      .mockReturnValue(of(false));
    salesOrderFromStateSpy = jest.spyOn(hardwareCheckoutFacade, 'salesOrderFromState$', 'get');
    jest.spyOn(console, 'error');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show loader', () => {
    expect(strategy.showLoader()).toBe(true);
  });

  it('should open the URL from the state', (done: DoneFn) => {
    contractSummaryUrlSpy.mockReturnValue(of('mockContractSummaryUrl'));
    contractSummaryGenerationNotPossibleSpy.mockReturnValue(of(false));
    strategy.execute().subscribe({
      next: (result) => {
        expect(result).toBeFalsy();
        expect(contractSummaryUrlSpy).toHaveBeenCalled();
        expect(urlServiceSpy).toHaveBeenCalledWith('mockContractSummaryUrl');
        expect(hardwareCheckoutFacade.generateContractSummary).not.toHaveBeenCalled();
        expect(hardwareCheckoutFacade.setContractSummaryUrl).not.toHaveBeenCalled();

        done();
      },
    });
  });

  it('should generate the contract summary and open the URL', (done: DoneFn) => {
    const salesOrder = salesOrderFactory.build();
    const expectedContractSummaryUrl =
      'https://api.int.telenet.be/ocapi/public/api/sales-service/v1/contractsummary/contacturl/' + salesOrder.id;

    contractSummaryUrlSpy.mockReturnValue(of(undefined));
    salesOrderFromStateSpy.mockReturnValue(of(salesOrder));
    contractSummaryGenerationNotPossibleSpy.mockReturnValue(of(undefined));

    strategy.execute().subscribe({
      next: (result) => {
        expect(result).toBeFalsy();
        expect(hardwareCheckoutFacade.generateContractSummary).toHaveBeenCalledWith(salesOrder.id);
        expect(hardwareCheckoutFacade.setContractSummaryUrl).toHaveBeenCalledWith(expectedContractSummaryUrl);
        expect(urlServiceSpy).toHaveBeenCalledWith(expectedContractSummaryUrl);
        done();
      },
    });
  });

  it('should log error and notification if sales order is not available', (done: DoneFn) => {
    contractSummaryUrlSpy.mockReturnValue(of(undefined));
    salesOrderFromStateSpy.mockReturnValue(of(undefined));

    strategy.execute().subscribe({
      next: () => {
        expect(console.error).toHaveBeenCalledWith(
          'Error while generating contract summary.  SalesOrder not set in state'
        );
        expect(hardwareCheckoutFacade.addSummaryGeneralNotification).toHaveBeenCalledWith(
          contractGenerationErrorNotification
        );
        expect(urlServiceSpy).not.toHaveBeenCalled();
        done();
      },
    });
  });

  it('should add notification if sales order generation is not possible', (done: DoneFn) => {
    contractSummaryUrlSpy.mockReturnValue(of(undefined));
    salesOrderFromStateSpy.mockReturnValue(of(undefined));
    contractSummaryGenerationNotPossibleSpy.mockReturnValue(of(true));

    strategy.execute().subscribe({
      next: () => {
        expect(hardwareCheckoutFacade.addSummaryGeneralNotification).toHaveBeenCalledWith(
          contractGenerationErrorNotification
        );
        expect(urlServiceSpy).not.toHaveBeenCalled();
        done();
      },
    });
  });

  it('should add notification if sales order generation is possible', (done: DoneFn) => {
    contractSummaryUrlSpy.mockReturnValue(of(undefined));
    salesOrderFromStateSpy.mockReturnValue(of(undefined));
    contractSummaryGenerationNotPossibleSpy.mockReturnValue(of(true));

    strategy.execute().subscribe({
      next: () => {
        expect(hardwareCheckoutFacade.addSummaryGeneralNotification).toHaveBeenCalledWith(
          contractGenerationErrorNotification
        );
        expect(urlServiceSpy).not.toHaveBeenCalled();
        done();
      },
    });
  });
});
