import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  DtvBoxManagementFacade,
  DtvBoxSubscription,
  DtvBoxType,
  SaleType,
} from '@entertainment/dtv-box-management/data-access';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DtvBoxOverviewComponent } from './dtv-box-overview.component';
import { MockProvider } from 'ng-mocks';

describe('DtvBoxOverviewComponent', () => {
  let component: DtvBoxOverviewComponent;
  let facade: DtvBoxManagementFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, HttpClientTestingModule, StoreModule.forRoot({}), EffectsModule.forRoot([])],
      providers: [
        MockProvider(DtvBoxManagementFacade, {
          subscriptions$: of([]),
          addressesWithDtvSubscriptions$: of([]),
          selectedAddress$: of(undefined),
          selectedDtvSubscription$: of(undefined),
          isPinCodeReset$: of(false),
          showSecurityCode$: of(false),
        }),
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    }).compileComponents();

    component = TestBed.createComponent(DtvBoxOverviewComponent).componentInstance;
    facade = TestBed.inject(DtvBoxManagementFacade);

    jest.spyOn(facade, 'showSecurityCode');
    jest.spyOn(facade, 'resetPinCode');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`when component gets loaded after login`, () => {
    it('should call facade methods after login', () => {
      jest.spyOn(facade, 'loadSubscriptions');
      jest.spyOn(facade, 'loadAddresses');

      component.initAfterLoggedIn();

      expect(facade.loadSubscriptions).toHaveBeenCalled();
      expect(facade.loadAddresses).toHaveBeenCalled();
    });
  });

  describe(`when reset pin code is called`, () => {
    it('should call facade for reset pin code when EOS box', () => {
      const dtvBoxSubscriptionEos: DtvBoxSubscription = {
        id: '123456789',
        identifier: 'DTV000067311',
        addressId: '987654321',
        dtvBoxes: [
          {
            id: '123456789',
            name: 'HD Digicorder5',
            type: DtvBoxType.EOS,
            saleType: SaleType.RENT,
            macAddress: '00:11:22:39:44:55',
            serialNumber: '965325009601',
            modelNumber: 'AD2100',
            modelImageName: 'ad2100.png',
          },
          {
            id: '987654321',
            name: 'HD Digicorder6',
            type: DtvBoxType.EOS,
            saleType: SaleType.RENT,
            macAddress: '00:11:22:33:44:75',
            serialNumber: '964456628297',
            modelNumber: 'AD2100',
            modelImageName: 'ad2100.png',
          },
        ],
      };

      component.onResetPinCode(dtvBoxSubscriptionEos);

      expect(facade.showSecurityCode).not.toHaveBeenCalled();
      expect(facade.resetPinCode).toHaveBeenCalled();
    });

    it('should call facade for show security code when SIPADAN box', () => {
      const dtvBoxSubscriptionSipadan: DtvBoxSubscription = {
        id: '123456789',
        identifier: 'DTV000067311',
        addressId: '987654321',
        dtvBoxes: [
          {
            id: '123456789',
            name: 'HD Digicorder',
            type: DtvBoxType.SIPADAN,
            saleType: SaleType.RENT,
            macAddress: '00:11:22:33:44:55',
            serialNumber: '965325009601',
            modelNumber: 'AD2102',
            modelImageName: 'ad2102.png',
          },
          {
            id: '987654321',
            name: 'HD Digicorder2',
            type: DtvBoxType.SIPADAN,
            saleType: SaleType.RENT,
            macAddress: '00:11:22:33:44:56',
            serialNumber: '964456628297',
            modelNumber: 'AD2101',
            modelImageName: 'ad2101.png',
          },
        ],
      };

      component.onResetPinCode(dtvBoxSubscriptionSipadan);

      expect(facade.showSecurityCode).toHaveBeenCalled();
      expect(facade.resetPinCode).not.toHaveBeenCalled();
    });

    it('should return when undefined subscription', () => {
      component.onResetPinCode(undefined);

      expect(facade.showSecurityCode).not.toHaveBeenCalled();
      expect(facade.resetPinCode).not.toHaveBeenCalled();
    });
  });
});
