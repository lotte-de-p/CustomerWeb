import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import {
  AuthorConfiguration,
  AuthorConfigurationFacade,
  CustomerCategory,
  setAuthorConfigurationAction,
  setBrand,
  setCategory,
} from '@sales/customer-registration/data-access';
import { when } from 'jest-when';
import { CookieService } from 'ngx-cookie-service';
import { CustomerRegistrationConstants } from './constants/customer-registration.constants';
import { CustomerRegistrationComponent } from './customer-registration.component';

const privacyPolicyUrl = 'www.telenet.be/privacy-policy';
const marketingUrl = 'www.telenet.be/marketing-url';
describe('CustomerRegistrationComponent', () => {
  let component: CustomerRegistrationComponent;
  let fixture: ComponentFixture<CustomerRegistrationComponent>;
  let store$: MockStore;
  let cookieService: CookieService;
  let authorConfigurationFacade: AuthorConfigurationFacade;
  const TEST_URL = 'http://testurl.com';
  const mockWindow = {
    location: {
      href: TEST_URL,
      search: '',
      hash: '',
      origin: '',
      pathname: '',
      assign: new Function(),
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [TranslateModule.forRoot(), StoreModule.forRoot(), EffectsModule.forRoot(), HttpClientModule],
      providers: [CookieService, provideMockStore(), { provide: 'Window', useValue: mockWindow }],
    }).compileComponents();

    jest.spyOn(console, 'error').mockImplementation(jest.fn);
    jest.spyOn(console, 'log').mockImplementation(jest.fn);
    store$ = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CustomerRegistrationComponent);
    cookieService = TestBed.inject(CookieService);
    authorConfigurationFacade = TestBed.inject(AuthorConfigurationFacade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('onInit', () => {
    it('should initialize values and update state and get cookie to determine flow', fakeAsync(() => {
      jest.spyOn(store$, 'dispatch');
      jest.spyOn(authorConfigurationFacade, 'isResidential').mockReturnValue(true);
      component.privacyPolicyUrl = privacyPolicyUrl;
      component.showSalesContactNumber = true;
      component.enablePID = true;
      component.marketingUrl = marketingUrl;
      when(jest.spyOn(cookieService, 'get'))
        .calledWith(CustomerRegistrationConstants.IDP_PARAM)
        .mockReturnValue(CustomerRegistrationConstants.IDP_TYPE_ITS_ME);
      component.ngOnInit();
      const authorInputs = {
        privacyPolicyUrl: privacyPolicyUrl,
        showSalesContactNumber: true,
        isPIDEnabled: true,
        marketingUrl: marketingUrl,
      } as AuthorConfiguration;
      expect(store$.dispatch).toHaveBeenNthCalledWith(1, setBrand({ brand: '' }));
      expect(store$.dispatch).toHaveBeenNthCalledWith(2, setCategory({ category: CustomerCategory.RESIDENTIAL }));
      expect(store$.dispatch).toHaveBeenNthCalledWith(3, setAuthorConfigurationAction(authorInputs));
    }));
  });
});
