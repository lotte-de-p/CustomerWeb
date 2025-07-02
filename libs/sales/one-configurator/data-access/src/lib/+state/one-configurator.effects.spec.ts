import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of, throwError } from 'rxjs';
import { OneConfiguratorEffects } from './one-configurator.effects';
import {
  addSim,
  init,
  removeSim,
  setCustomerProductHolding,
  setLoginDetails,
  setPromotions,
  updateUsageType,
} from './one-configurator.actions';
import {
  selectCustomerProductHolding,
  selectIsDarwinUser,
  selectOptinsState,
  selectPromotions,
  selectSimsState,
  selectTierState,
  selectTvState,
} from './one-configurator.selectors';
import { SimsState, UsageTypeUpdate } from '../entities/sims/sims-state.interface';
import { Actions } from '@ngrx/effects';
import { MessageBusService } from '@telenet/ng-lib-personalisation';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { UsageTypeEnum } from '../entities/sims/usage-type.enum';
import { LoginDetails, UserDetailsService } from '@telenet/ng-lib-ocapi';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  CustomerProductHolding,
  CustomerProductHoldingService,
  Promotion,
  PromotionService,
} from '@sales/shared/data-access';
import { omapiConnectFiveNcFamily, OmapiFamilyService } from '@telenet/ng-lib-omapi';
import { SalesOfferService } from '../infrastructure/sales-offer/sales-offer.service';
import { ProductRequest, SalesOfferRequest } from '../entities/sales-offer/sales-offer-request';

describe('OneConfiguratorEffects', () => {
  let effects: OneConfiguratorEffects;
  let actions$: Actions;
  let store$: MockStore;
  let messageBusService: MessageBusService;
  let userDetailsService: UserDetailsService;
  let promotionService: PromotionService;
  let customerProductHoldingService: CustomerProductHoldingService;
  let omapiFamilyService: OmapiFamilyService;
  let salesOfferService: SalesOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        OneConfiguratorEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
        MessageBusService,
        { provide: 'Window', useValue: {} },
      ],
    });

    effects = TestBed.inject(OneConfiguratorEffects);
    actions$ = TestBed.inject(Actions);
    store$ = TestBed.inject(MockStore);
    messageBusService = TestBed.inject(MessageBusService);
    userDetailsService = TestBed.inject(UserDetailsService);
    promotionService = TestBed.inject(PromotionService);
    customerProductHoldingService = TestBed.inject(CustomerProductHoldingService);
    omapiFamilyService = TestBed.inject(OmapiFamilyService);
    salesOfferService = TestBed.inject(SalesOfferService);
  });

  describe('setLoginDetails$', () => {
    const setLoginDetailsType = '[ONE Configurator] set login details';

    it('should dispatch setLoginDetails', fakeAsync(() => {
      const expected: LoginDetails = new LoginDetails(200);

      const getUserDetailsSpy = jest.spyOn(userDetailsService, 'getUserDetails').mockReturnValue(of(expected));

      actions$ = of(init());

      effects.setLoginDetails$.subscribe((action) => {
        expect(action.type).toEqual(setLoginDetailsType);
        expect(action.loginDetails).toEqual(expected);
        expect(getUserDetailsSpy).toHaveBeenCalled();
      });
      tick();
    }));

    it('should dispatch setLoginDetails with null when receiving 401', fakeAsync(() => {
      const loginDetails: LoginDetails = new LoginDetails(401);
      const expected = null;

      const getUserDetailsSpy = jest.spyOn(userDetailsService, 'getUserDetails').mockReturnValue(of(loginDetails));

      actions$ = of(init());

      effects.setLoginDetails$.subscribe((action) => {
        expect(action.type).toEqual(setLoginDetailsType);
        expect(action.loginDetails).toEqual(expected);
        expect(getUserDetailsSpy).toHaveBeenCalled();
      });
      tick();
    }));

    it('should dispatch setLoginDetails with null when receiving an error', fakeAsync(() => {
      const expected = null;

      const getUserDetailsSpy = jest
        .spyOn(userDetailsService, 'getUserDetails')
        .mockReturnValue(throwError(() => jest.fn()));

      actions$ = of(init());

      effects.setLoginDetails$.subscribe((action) => {
        expect(action.type).toEqual(setLoginDetailsType);
        expect(action.loginDetails).toEqual(expected);
        expect(getUserDetailsSpy).toHaveBeenCalled();
      });
      tick();
    }));

    describe('setPromotions$', () => {
      const setPromotionsType = '[ONE Configurator] set promotions';

      it('should dispatch setPromotions', fakeAsync(() => {
        const isDarwinUser = true;
        const expected: Promotion[] = [{ description: 'description' }];

        store$.overrideSelector(selectIsDarwinUser, isDarwinUser);

        const getPromotionsSpy = jest.spyOn(promotionService, 'getPromotions').mockReturnValue(of(expected));

        actions$ = of(setLoginDetails({ loginDetails: new LoginDetails(200) }));

        effects.setPromotions$.subscribe((action) => {
          expect(action.type).toEqual(setPromotionsType);
          expect(action.promotions).toEqual(expected);
          expect(getPromotionsSpy).toHaveBeenCalled();
        });
        tick();
      }));

      it('should dispatch setPromotions with empty array when receiving an error', fakeAsync(() => {
        const isDarwinUser = true;
        const expected: Promotion[] = [];

        store$.overrideSelector(selectIsDarwinUser, isDarwinUser);

        const getPromotionsSpy = jest
          .spyOn(promotionService, 'getPromotions')
          .mockReturnValue(throwError(() => jest.fn()));

        actions$ = of(setLoginDetails({ loginDetails: new LoginDetails(200) }));

        effects.setPromotions$.subscribe((action) => {
          expect(action.type).toEqual(setPromotionsType);
          expect(action.promotions).toEqual(expected);
          expect(getPromotionsSpy).toHaveBeenCalled();
        });
        tick();
      }));

      it('should dispatch setPromotions with empty array when user is not darwin user', fakeAsync(() => {
        const isDarwinUser = false;
        const expected: Promotion[] = [];

        store$.overrideSelector(selectIsDarwinUser, isDarwinUser);

        const getPromotionsSpy = jest.spyOn(promotionService, 'getPromotions');

        actions$ = of(setLoginDetails({ loginDetails: new LoginDetails(200) }));

        effects.setPromotions$.subscribe((action) => {
          expect(action.type).toEqual(setPromotionsType);
          expect(action.promotions).toEqual(expected);
          expect(getPromotionsSpy).not.toHaveBeenCalled();
        });
        tick();
      }));
    });
  });

  describe('setCustomerProductHolding$', () => {
    const setCustomerProductHoldingType = '[ONE Configurator] set customer product holding';

    it('should dispatch setCustomerProductHolding', fakeAsync(() => {
      const isDarwinUser = true;
      const expected: CustomerProductHolding[] = [
        {
          identifier: 'identifier',
          specUrl: 'specUrl',
          products: [],
          options: [],
          address: {
            addressId: 'addressId',
            municipality: 'municipality',
            postalCode: 'postalCode',
            street: 'street',
            houseNr: 'houseNr',
            country: 'country',
          },
        },
      ];

      store$.overrideSelector(selectIsDarwinUser, isDarwinUser);

      const getCustomerProductHoldingSpy = jest
        .spyOn(customerProductHoldingService, 'getCustomerProductHolding')
        .mockReturnValue(of(expected));

      actions$ = of(setLoginDetails({ loginDetails: new LoginDetails(200) }));

      effects.setCustomerProductHolding$.subscribe((action) => {
        expect(action.type).toEqual(setCustomerProductHoldingType);
        expect(action.customerProductHolding).toEqual(expected);
        expect(getCustomerProductHoldingSpy).toHaveBeenCalled();
      });
      tick();
    }));

    it('should dispatch setCustomerProductHolding with empty array when receiving an error', fakeAsync(() => {
      const isDarwinUser = true;
      const expected: CustomerProductHolding[] = [];

      store$.overrideSelector(selectIsDarwinUser, isDarwinUser);

      const getCustomerProductHoldingSpy = jest
        .spyOn(customerProductHoldingService, 'getCustomerProductHolding')
        .mockReturnValue(throwError(() => jest.fn()));

      actions$ = of(setLoginDetails({ loginDetails: new LoginDetails(200) }));

      effects.setCustomerProductHolding$.subscribe((action) => {
        expect(action.type).toEqual(setCustomerProductHoldingType);
        expect(action.customerProductHolding).toEqual(expected);
        expect(getCustomerProductHoldingSpy).toHaveBeenCalled();
      });
      tick();
    }));

    it('should dispatch setCustomerProductHolding with empty array when user is not darwin user', fakeAsync(() => {
      const isDarwinUser = false;
      const expected: CustomerProductHolding[] = [];

      store$.overrideSelector(selectIsDarwinUser, isDarwinUser);

      const getCustomerProductHoldingSpy = jest.spyOn(customerProductHoldingService, 'getCustomerProductHolding');

      actions$ = of(setLoginDetails({ loginDetails: new LoginDetails(200) }));

      effects.setCustomerProductHolding$.subscribe((action) => {
        expect(action.type).toEqual(setCustomerProductHoldingType);
        expect(action.customerProductHolding).toEqual(expected);
        expect(getCustomerProductHoldingSpy).not.toHaveBeenCalled();
      });
      tick();
    }));
  });

  it('should send add sim payload to messageBus$', fakeAsync(() => {
    const simsState: SimsState = {
      simConfigurations: [{ usageType: UsageTypeEnum.LIMITED1 }, { usageType: UsageTypeEnum.LIMITED1 }],
      priceAfterChangingOneSimToLimited: null,
      priceAfterChangingOneSimToUnlimited: null,
    };
    store$.overrideSelector(selectSimsState, simsState);
    jest.spyOn(messageBusService.messageBus$, 'next');

    actions$ = of(addSim());

    effects.notifyAddSim$.subscribe((simsState: SimsState) => {
      expect(simsState.simConfigurations.length).toEqual(2);
      expect(messageBusService.messageBus$.next).toHaveBeenCalledWith({
        type: '[monorepo] update number of sims',
        payloadAsJson: JSON.stringify({ length: 2 }),
      });
    });
    tick();
  }));

  it('should send remove sim payload to messageBus$', fakeAsync(() => {
    const simsState: SimsState = {
      simConfigurations: [{ usageType: UsageTypeEnum.LIMITED1 }],
      priceAfterChangingOneSimToLimited: null,
      priceAfterChangingOneSimToUnlimited: null,
    };
    store$.overrideSelector(selectSimsState, simsState);
    jest.spyOn(messageBusService.messageBus$, 'next');

    actions$ = of(removeSim());

    effects.notifyRemoveSim$.subscribe((simsState: SimsState) => {
      expect(simsState.simConfigurations.length).toEqual(1);
      expect(messageBusService.messageBus$.next).toHaveBeenCalledWith({
        type: '[monorepo] update number of sims',
        payloadAsJson: JSON.stringify({ length: 1 }),
      });
    });
    tick();
  }));

  it('should send update usage type payload to messageBus$', fakeAsync(() => {
    const simsState: SimsState = {
      simConfigurations: [{ usageType: UsageTypeEnum.LIMITED1 }, { usageType: UsageTypeEnum.LIMITED1 }],
      priceAfterChangingOneSimToLimited: null,
      priceAfterChangingOneSimToUnlimited: null,
    };
    const payloadSims = {
      simConfigurations: [{ limited: true }, { limited: true }],
    };
    store$.overrideSelector(selectSimsState, simsState);
    jest.spyOn(messageBusService.messageBus$, 'next');
    const data: UsageTypeUpdate = { index: 0, usageType: UsageTypeEnum.UNLIMITED };
    actions$ = of(updateUsageType({ usageTypeUpdate: data }));

    effects.notifyUpdateUsageType$.subscribe((simsState: SimsState) => {
      expect(simsState.simConfigurations.length).toEqual(2);
      expect(messageBusService.messageBus$.next).toHaveBeenCalledWith({
        type: '[monorepo] update usage type of sims',
        payloadAsJson: JSON.stringify({ simConfigurations: payloadSims.simConfigurations }),
      });
    });
    tick();
  }));

  describe('prefill$', () => {
    it('prefill$ should dispatch prefill', fakeAsync(() => {
      const customerProductHolding: CustomerProductHolding[] = [
        {
          identifier: 'identifier',
          specUrl: 'specUrl',
          products: [],
          options: [],
          address: {
            addressId: 'addressId',
            municipality: 'municipality',
            postalCode: 'postalCode',
            street: 'street',
            houseNr: 'houseNr',
            country: 'country',
          },
        },
      ];
      const promotions = [{ description: 'description' }];
      actions$ = of(setCustomerProductHolding({ customerProductHolding }), setPromotions({ promotions }));

      effects.prefill$.subscribe((action) => {
        expect(action.type).toEqual('[ONE Configurator] prefill');
      });

      tick();
    }));
  });

  describe('calculatePriceAfterChangingOneSimToLimited$', () => {
    it('should dispatch calculatePriceAfterChangingOneSimToLimited', fakeAsync(() => {
      const omapiFamilyServiceSpy = jest
        .spyOn(omapiFamilyService, 'getFamily')
        .mockReturnValue(of(omapiConnectFiveNcFamily()));

      store$.overrideSelector(selectTierState, { tier: 'ONE' });
      store$.overrideSelector(selectSimsState, {
        simConfigurations: [{ usageType: UsageTypeEnum.UNLIMITED }],
        priceAfterChangingOneSimToLimited: null,
        priceAfterChangingOneSimToUnlimited: null,
      });
      store$.overrideSelector(selectTvState, {
        entertainmentProduct: 'TEOS0001',
        entertainmentPacks: ['TVPK0015'],
        streamingServices: ['STRM0007'],
      });
      store$.overrideSelector(selectOptinsState, { optins: [] });
      store$.overrideSelector(selectCustomerProductHolding, [
        {
          identifier: 'identifier',
          specUrl: 'specUrl',
          products: [],
          options: [],
          address: {
            addressId: 'addressId',
            municipality: 'municipality',
            postalCode: 'postalCode',
            street: 'street',
            houseNr: 'houseNr',
            country: 'country',
          },
        },
      ]);
      store$.overrideSelector(selectPromotions, []);

      jest.spyOn(salesOfferService, 'fetchSalesOffer').mockImplementation((salesOfferRequest: SalesOfferRequest) => {
        const numberOfLimitedSims: number = salesOfferRequest.products
          .map((product: ProductRequest) => product.amountOfLimitedSims)
          .find((amountOfLimitedSims: number | undefined) => amountOfLimitedSims !== undefined) as number;

        return of({
          products: [
            {
              omapiId: 'omapiId',
              price: numberOfLimitedSims === 1 ? 68.4 : 75.8,
              options: [],
              streamingServices: [],
              optins: [],
            },
          ],
        });
      });

      actions$ = of(addSim());

      effects.calculatePriceAfterChangingOneSimToLimited$.subscribe((action) => {
        expect(action.type).toEqual('[ONE Configurator] update price after changing one sim to limited');
        expect(action.priceAfterChangingOneSimToLimited).toEqual({ price: 68.4 - 75.8 });
        expect(omapiFamilyServiceSpy).toHaveBeenCalled();
      });

      tick();
    }));
  });

  describe('calculatePriceAfterChangingOneSimToUnLimited$', () => {
    it('should dispatch calculatePriceAfterChangingOneSimToUnLimited', fakeAsync(() => {
      const omapiFamilyServiceSpy = jest
        .spyOn(omapiFamilyService, 'getFamily')
        .mockReturnValue(of(omapiConnectFiveNcFamily()));

      store$.overrideSelector(selectTierState, { tier: 'ONE' });
      store$.overrideSelector(selectSimsState, {
        simConfigurations: [{ usageType: UsageTypeEnum.LIMITED1 }],
        priceAfterChangingOneSimToLimited: null,
        priceAfterChangingOneSimToUnlimited: null,
      });
      store$.overrideSelector(selectTvState, {
        entertainmentProduct: 'TEOS0001',
        entertainmentPacks: ['TVPK0015'],
        streamingServices: ['STRM0007'],
      });
      store$.overrideSelector(selectOptinsState, { optins: [] });
      store$.overrideSelector(selectCustomerProductHolding, [
        {
          identifier: 'identifier',
          specUrl: 'specUrl',
          products: [],
          options: [],
          address: {
            addressId: 'addressId',
            municipality: 'municipality',
            postalCode: 'postalCode',
            street: 'street',
            houseNr: 'houseNr',
            country: 'country',
          },
        },
      ]);
      store$.overrideSelector(selectPromotions, []);

      jest.spyOn(salesOfferService, 'fetchSalesOffer').mockImplementation((salesOfferRequest: SalesOfferRequest) => {
        const numberOfLimitedSims: number = salesOfferRequest.products
          .map((product: ProductRequest) => product.amountOfLimitedSims)
          .find((amountOfLimitedSims: number | undefined) => amountOfLimitedSims !== undefined) as number;

        return of({
          products: [
            {
              omapiId: 'omapiId',
              price: numberOfLimitedSims === 1 ? 68.4 : 75.8,
              options: [],
              streamingServices: [],
              optins: [],
            },
          ],
        });
      });

      actions$ = of(addSim());

      effects.calculatePriceAfterChangingOneSimToUnlimited$.subscribe((action) => {
        expect(action.type).toEqual('[ONE Configurator] update price after changing one sim to unlimited');
        expect(action.priceAfterChangingOneSimToUnlimited).toEqual({ price: 75.8 - 68.4 });
        expect(omapiFamilyServiceSpy).toHaveBeenCalled();
      });

      tick();
    }));
  });
});
