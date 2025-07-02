import { AuthorConfigurationFacade } from './author-configuration.facade';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { setAuthorConfigurationAction, setBrand, setCategory } from '../+state/customer-registration.actions';
import { of } from 'rxjs';
import { PathCategorisationService } from '@telenet/ng-lib-page';
import { AuthorConfiguration, CustomerCategory } from '../+state/customer-registration.state';

describe('AuthorConfigurationFacade', () => {
  let facade: AuthorConfigurationFacade;
  let store$: MockStore;
  let service: PathCategorisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore(), PathCategorisationService, { provide: 'Window', useValue: window }],
    });

    facade = TestBed.inject(AuthorConfigurationFacade);
    service = TestBed.inject(PathCategorisationService);
    store$ = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('setAuthorConfiguration', () => {
    it('should dispatch provided author configuration', () => {
      jest.spyOn(store$, 'dispatch');
      const authorConfiguration: AuthorConfiguration = {
        privacyPolicyUrl: 'url',
        marketingUrl: 'otherUrl',
        showSalesContactNumber: true,
        isPIDEnabled: false,
        pointOfSalesUrl: 'posUrl',
        requestHelpUrl: 'helpUrl',
        allowAnyNavsForFixedProducts: true,
      };

      facade.setAuthorConfiguration(authorConfiguration);

      expect(store$.dispatch).toHaveBeenCalledWith(setAuthorConfigurationAction(authorConfiguration));
    });
  });
  describe('setBrandFromUrl', () => {
    it('should set the brand from the url in uppercase if present', () => {
      jest.spyOn(store$, 'dispatch');
      jest.spyOn(service, 'getCustomerBrand').mockReturnValue('Telenet');
      facade.setBrandFromUrl();
      expect(store$.dispatch).toHaveBeenCalledWith(setBrand({ brand: 'TELENET' }));
    });
    it('should set the default string if no brand present', () => {
      jest.spyOn(store$, 'dispatch');
      jest.spyOn(service, 'getCustomerBrand');
      facade.setBrandFromUrl();
      expect(store$.dispatch).toHaveBeenCalledWith(setBrand({ brand: '' }));
    });
  });

  describe('getBrand', () => {
    it('should return the brand in lowercase from the url', () => {
      jest.spyOn(service, 'getCustomerBrand').mockReturnValue('Telenet');
      const brand = facade.getBrand();
      expect(brand).toEqual('telenet');
    });
    it('should return a default string if service returns undefined', () => {
      jest.spyOn(service, 'getCustomerBrand');
      const brand = facade.getBrand();
      expect(brand).toEqual('');
    });
  });

  describe('isResidential', () => {
    it('should return true if the url is residantial', () => {
      jest.spyOn(service, 'isCustomerOfType').mockReturnValue(true);
      const actual = facade.isResidential();
      expect(actual).toBe(true);
    });
  });

  describe('isBusiness', () => {
    it('should return true if the url is residantial', () => {
      jest.spyOn(service, 'isCustomerOfType').mockReturnValue(true);
      const actual = facade.isBusiness();
      expect(actual).toBe(true);
    });
  });
  describe('privacy policy url', () => {
    it('should select privacy policy url from store', () => {
      const url = 'privacy.be';

      jest.spyOn(store$, 'select').mockReturnValue(of(url));

      facade.privacyPolicyUrl$.subscribe((url) => {
        expect(url).toEqual(url);
      });
    });
  });

  describe('marketing url', () => {
    it('should select marketing url from store', () => {
      const url = 'marketing.be';

      jest.spyOn(store$, 'select').mockReturnValue(of(url));

      facade.marketingUrl$.subscribe((url) => {
        expect(url).toEqual(url);
      });
    });
  });

  describe('setCustomerCategory', () => {
    it('should set customer category to Residential', () => {
      jest.spyOn(store$, 'dispatch');
      jest.spyOn(service, 'isCustomerOfType').mockReturnValue(true);
      facade.setCustomerCategory();
      expect(store$.dispatch).toHaveBeenCalledWith(setCategory({ category: CustomerCategory.RESIDENTIAL }));
    });
    it('should set customer category to Business', () => {
      jest.spyOn(store$, 'dispatch');
      jest.spyOn(service, 'isCustomerOfType').mockReturnValue(false);
      facade.setCustomerCategory();
      expect(store$.dispatch).toHaveBeenCalledWith(setCategory({ category: CustomerCategory.BUSINESS }));
    });
  });
});
