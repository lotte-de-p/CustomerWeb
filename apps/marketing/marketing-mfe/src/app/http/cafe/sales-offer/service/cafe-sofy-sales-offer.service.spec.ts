import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  SofyRequestProduct,
  SofyRequestBasket,
  SofyRequestAddress,
  SofyCustomerProductHoldingProductMapper,
  SofyProductMapper,
  SofyModemDetailsMapper,
  SofyCustomerProductHoldingProduct,
  SofyService,
  SalesOfferInterface,
  sofyRequestAddressBuilder,
} from '@telenet/ng-lib-sofy';
import { CafeSofySalesOfferService } from './cafe-sofy-sales-offer.service';
import { of } from 'rxjs';
import { CafeRawCustomerproductholdingService } from '../../raw-customerproduct-holding/services/cafe-raw-customerproductholding.service';
import { CafeModemDetailsService } from '../../modem-details/services/cafe-modem-details.service';
import { PromotionsService } from '../../promotions/services/promotions.service';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

import { LoginDetails, LoginService } from '@telenet/ng-lib-ocapi';
import { customerInstallationDetailsTestFactory } from '../../installation-details/interfaces/installation-details-response.interface.testfactory';
import { Promotion } from '../../promotions/models/promotion.model';
import { CafeModemDetailsModel } from '../../modem-details/models/cafe-modem-details.model';

describe('CafeSofySalesOfferService', () => {
  let cafeSofySalesOfferService: CafeSofySalesOfferService,
    sofyService: SofyService,
    rawCustomerproductholdingService: CafeRawCustomerproductholdingService,
    modemDetailsService: CafeModemDetailsService,
    promotionsService: PromotionsService,
    loginService: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CafeSofySalesOfferService,
        SofyService,
        SofyProductMapper,
        SofyModemDetailsMapper,
        SofyCustomerProductHoldingProductMapper,
        CookieService,
        { provide: 'Window', useValue: {} },
      ],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    cafeSofySalesOfferService = TestBed.inject(CafeSofySalesOfferService);
    sofyService = TestBed.inject(SofyService);
    rawCustomerproductholdingService = TestBed.inject(CafeRawCustomerproductholdingService);
    modemDetailsService = TestBed.inject(CafeModemDetailsService);
    promotionsService = TestBed.inject(PromotionsService);
    loginService = TestBed.inject(LoginService);
  });

  it('should be created', inject([CafeSofySalesOfferService], (service: CafeSofySalesOfferService) => {
    expect(service).toBeTruthy();
  }));

  describe('AuthenticatedAsManager', () => {
    let salesOffer: SalesOfferInterface, loginDetails: LoginDetails;
    const promotions: Promotion[] = [];
    const modemDetails: CafeModemDetailsModel[] = [{} as CafeModemDetailsModel];
    const customerProduct = new SofyCustomerProductHoldingProduct();
    customerProduct.identifier = 'test';
    customerProduct.specurl = 'url';
    customerProduct.products = [];
    customerProduct.options = [];
    customerProduct.address = {
      addressid: '123',
      country: 'Belgie',
      housenr: '2',
      municipality: 'Ant',
      postalcode: '2800',
      street: 'street',
    };
    const sofyRequestAddress = {
      addressid: '123',
      country: 'Belgie',
      housenr: '2',
      municipality: 'Ant',
      postalcode: '2800',
      street: 'street',
    } as SofyRequestAddress;
    const rawCustomerProductHolding = [customerProduct];

    beforeEach(() => {
      salesOffer = {} as SalesOfferInterface;
      loginDetails = createLoginDetails({ scopes: ['promotions', 'modemdetails', 'customerproductholding'] });
      loginService.getLoginDetails = jest.fn().mockReturnValue(of(loginDetails));
      promotionsService.getPromotions = jest.fn().mockReturnValue(of(promotions));
      promotionsService.getPromotionsAdaptor = jest.fn().mockReturnValue(of(promotions));
      sofyService.getSalesOffer = jest.fn().mockReturnValue(of(salesOffer));
      modemDetailsService.getModemDetails = jest.fn().mockReturnValue(of(modemDetails));
      modemDetailsService.getModemDetailsAdaptor = jest.fn().mockReturnValue(of(modemDetails));
      rawCustomerproductholdingService.getRawCustomerProductHolding = jest
        .fn()
        .mockReturnValue(of(rawCustomerProductHolding));
      rawCustomerproductholdingService.getRawCustomerProductHoldingAdaptor = jest
        .fn()
        .mockReturnValue(of(rawCustomerProductHolding));
    });

    describe('getSalesOfferWithDefaultInstallAddress', function () {
      it('should send installation address from CPH in the request to sofy', waitForAsync(() => {
        const shoppingBasket = {
          products: [
            {
              omapiid: '87',
              installationaddress: sofyRequestAddressBuilder.build(),
            } as SofyRequestProduct,
          ],
          campaignCode: 'EOY2021',
        } as SofyRequestBasket;
        const installationDetails = customerInstallationDetailsTestFactory.build();

        cafeSofySalesOfferService
          .getSalesOfferWithDefaultInstallAddress('messageGroup', shoppingBasket, installationDetails)
          .subscribe((response) => {
            expect(response).toEqual(salesOffer);
          });

        expect(loginService.getLoginDetails).toHaveBeenCalledTimes(1);
        expect(shoppingBasket.products && shoppingBasket.products[0].installationaddress).toEqual(sofyRequestAddress);
        expect(sofyService.getSalesOffer).toHaveBeenCalledWith(
          shoppingBasket.products,
          promotions,
          [],
          rawCustomerProductHolding,
          '',
          'EOY2021',
          'messageGroup',
          installationDetails,
          shoppingBasket.standaloneOptions
        );
        expect(promotionsService.getPromotions).toHaveBeenCalled();
        expect(promotionsService.getPromotionsAdaptor).not.toHaveBeenCalled();
        expect(modemDetailsService.getModemDetails).toHaveBeenCalled();
        expect(modemDetailsService.getModemDetailsAdaptor).not.toHaveBeenCalled();
      }));
      it('should send installation address from CPH in the request to sofy when requester is pricing component', waitForAsync(() => {
        const shoppingBasket = {
          products: [
            {
              omapiid: '87',
              installationaddress: sofyRequestAddressBuilder.build(),
            } as SofyRequestProduct,
          ],
          campaignCode: 'EOY2021',
        } as SofyRequestBasket;
        const installationDetails = customerInstallationDetailsTestFactory.build();

        cafeSofySalesOfferService
          .getSalesOfferWithDefaultInstallAddress('pricing', shoppingBasket, installationDetails)
          .subscribe((response) => {
            expect(response).toEqual(salesOffer);
          });

        expect(loginService.getLoginDetails).toHaveBeenCalledTimes(1);
        expect(shoppingBasket.products && shoppingBasket.products[0].installationaddress).toEqual(sofyRequestAddress);
        expect(sofyService.getSalesOffer).toHaveBeenCalledWith(
          shoppingBasket.products,
          promotions,
          [],
          rawCustomerProductHolding,
          '',
          'EOY2021',
          'pricing',
          installationDetails,
          shoppingBasket.standaloneOptions
        );
        expect(promotionsService.getPromotions).not.toHaveBeenCalled();
        expect(promotionsService.getPromotionsAdaptor).toHaveBeenCalled();
        expect(modemDetailsService.getModemDetails).not.toHaveBeenCalled();
        expect(modemDetailsService.getModemDetailsAdaptor).toHaveBeenCalled();
      }));
    });
  });

  function createLoginDetails(properties: unknown): LoginDetails {
    const loginDetails = new LoginDetails(200);
    loginDetails.customerNumber = '12345';
    loginDetails.state = 'test_state';
    loginDetails.nonce = 'test_nonce';
    loginDetails.status = 'test_status';
    loginDetails.scopes = [];
    loginDetails.bssSystem = 'test_bss_system';
    loginDetails.identityId = '';
    loginDetails.username = 'test_user';
    loginDetails.firstName = 'test_firstname';
    loginDetails.lastName = 'test_lastname';
    loginDetails.narrowed = false;
    loginDetails.authAge = 18;
    loginDetails.isPid = false;
    loginDetails.bssSytem = 'test_bssSytem';
    loginDetails.pegaServiceCaseId = '19783';
    loginDetails.contactNumber = '0488888888';
    loginDetails.isImpersonated = false;
    loginDetails.role = '';
    loginDetails.isExplicitLogin = false;
    loginDetails.isTelenetLogin = true;
    loginDetails.isSubLogin = false;
    loginDetails.loginAlias = 'test_login_alias';

    if (properties) {
      Object.keys(properties).forEach((key) => {
        loginDetails[key] = properties[key];
      });
    }
    return loginDetails;
  }

  afterEach(() => {
    cleanStylesFromDom();
  });
});
