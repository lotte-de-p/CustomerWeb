import {
  addSim,
  enable,
  prefill,
  removeSim,
  setCustomerProductHolding,
  setLoginDetails,
  setPromotions,
  updateEntertainmentPacks,
  updateEntertainmentProduct,
  updateOptins,
  updatePriceAfterChangingOneSimToLimited,
  updatePriceAfterChangingOneSimToUnlimited,
  updateStreamingServices,
  updateUsageType,
} from './one-configurator.actions';
import { initialState, oneConfiguratorReducer, OneConfiguratorState } from './one-configurator.reducers';
import { LoginDetails } from '@telenet/ng-lib-ocapi';
import { CustomerProductHolding, Promotion } from '@sales/shared/data-access';
import { UsageTypeEnum } from '../entities/sims/usage-type.enum';
import { UsageTypeUpdate } from '../entities/sims/sims-state.interface';

describe('ONE configurator reducer', () => {
  it('unknown action should return the initial state', () => {
    const action = {
      type: 'unknown',
    };

    const result: OneConfiguratorState = oneConfiguratorReducer(initialState, action);

    expect(result).toBe(initialState);
  });

  describe('enable', () => {
    it('should set enable flag to true', () => {
      const action = enable();

      const expected: OneConfiguratorState = {
        ...initialState,
        enabled: true,
      };

      const result: OneConfiguratorState = oneConfiguratorReducer(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('setLoginDetails', () => {
    it('should set login details', () => {
      const loginDetails: LoginDetails = new LoginDetails(200);
      const action = setLoginDetails({ loginDetails });

      const expected: OneConfiguratorState = {
        ...initialState,
        loginDetails,
      };

      const result: OneConfiguratorState = oneConfiguratorReducer(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('setCustomerProductHolding', () => {
    it('should set customer product holding', () => {
      const customerProductHolding: CustomerProductHolding[] = [];
      const action = setCustomerProductHolding({ customerProductHolding });

      const expected: OneConfiguratorState = {
        ...initialState,
        customerProductHolding,
      };

      const result: OneConfiguratorState = oneConfiguratorReducer(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('setPromotions', () => {
    it('should set promotions', () => {
      const promotions: Promotion[] = [{ description: 'description' }];
      const action = setPromotions({ promotions });

      const expected: OneConfiguratorState = {
        ...initialState,
        promotions,
      };

      const result: OneConfiguratorState = oneConfiguratorReducer(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('prefill', () => {
    it('should prefill', () => {
      const data = {
        tierState: {
          tier: 'ONEup',
        },
        simsState: {
          simConfigurations: [
            { usageType: UsageTypeEnum.UNLIMITED },
            { usageType: UsageTypeEnum.LIMITED1 },
            { usageType: UsageTypeEnum.UNLIMITED },
          ],
        },
      };
      const action = prefill(data);

      const expected: OneConfiguratorState = {
        ...initialState,
        tierState: {
          ...initialState.tierState,
          tier: 'ONEup',
        },
        simsState: {
          ...initialState.simsState,
          simConfigurations: [
            { usageType: UsageTypeEnum.UNLIMITED },
            { usageType: UsageTypeEnum.LIMITED1 },
            { usageType: UsageTypeEnum.UNLIMITED },
          ],
        },
      };

      const result: OneConfiguratorState = oneConfiguratorReducer(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('addSim', () => {
    it('should add sim', () => {
      const action = addSim();

      const expected: OneConfiguratorState = {
        ...initialState,
        simsState: {
          ...initialState.simsState,
          simConfigurations: [...initialState.simsState.simConfigurations, { usageType: UsageTypeEnum.LIMITED1 }],
        },
      };

      const result: OneConfiguratorState = oneConfiguratorReducer(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('removeSim', () => {
    it('should remove sim', () => {
      const action = removeSim();

      const expected: OneConfiguratorState = {
        ...initialState,
        simsState: {
          ...initialState.simsState,
          simConfigurations: initialState.simsState.simConfigurations.slice(0, -1),
        },
      };

      const result: OneConfiguratorState = oneConfiguratorReducer(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('updateUsageType', () => {
    it('should update usage type', () => {
      const initialStateWithSimConfigurations = {
        ...initialState,
        simsState: {
          ...initialState.simsState,
          simConfigurations: [{ usageType: UsageTypeEnum.LIMITED1 }, { usageType: UsageTypeEnum.LIMITED1 }],
        },
      };

      const usageTypeUpdate: UsageTypeUpdate = {
        index: 1,
        usageType: UsageTypeEnum.UNLIMITED,
      };
      const action = updateUsageType({ usageTypeUpdate });

      const expected: OneConfiguratorState = {
        ...initialState,
        simsState: {
          ...initialState.simsState,
          simConfigurations: [{ usageType: UsageTypeEnum.LIMITED1 }, { usageType: UsageTypeEnum.UNLIMITED }],
        },
      };

      const result: OneConfiguratorState = oneConfiguratorReducer(initialStateWithSimConfigurations, action);

      expect(result).toEqual(expected);
    });
  });

  describe('updateEntertainmentProduct', () => {
    it('should update entertainment product', () => {
      const entertainmentProduct = 'TEOS0001';
      const action = updateEntertainmentProduct({ entertainmentProduct });

      const expected: OneConfiguratorState = {
        ...initialState,
        tvState: {
          ...initialState.tvState,
          entertainmentProduct,
        },
      };

      const result: OneConfiguratorState = oneConfiguratorReducer(initialState, action);

      expect(result).toEqual(expected);
    });

    it('should clear entertainmentPacks and streamingServices if no entertainment product', () => {
      const initialStateWithTv = {
        ...initialState,
        tvState: {
          ...initialState.tvState,
          entertainmentProduct: 'TEOS0001',
          entertainmentPacks: ['TVPK0015'],
          streamingServices: ['STRM0007'],
        },
      };
      const entertainmentProduct = null;
      const action = updateEntertainmentProduct({ entertainmentProduct });

      const expected: OneConfiguratorState = {
        ...initialStateWithTv,
        tvState: {
          ...initialStateWithTv.tvState,
          entertainmentProduct,
          entertainmentPacks: [],
          streamingServices: [],
        },
      };

      const result: OneConfiguratorState = oneConfiguratorReducer(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('updateEntertainmentPacks', () => {
    it('should update entertainment packs', () => {
      const entertainmentPacks = ['TVPK0015'];
      const action = updateEntertainmentPacks({ entertainmentPacks });

      const expected: OneConfiguratorState = {
        ...initialState,
        tvState: {
          ...initialState.tvState,
          entertainmentPacks,
        },
      };

      const result: OneConfiguratorState = oneConfiguratorReducer(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('updateStreamingServices', () => {
    it('should update update streaming services', () => {
      const streamingServices = ['STRM0007'];
      const action = updateStreamingServices({ streamingServices });

      const expected: OneConfiguratorState = {
        ...initialState,
        tvState: {
          ...initialState.tvState,
          streamingServices,
        },
      };

      const result: OneConfiguratorState = oneConfiguratorReducer(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('updateOptins', () => {
    it('should update optins', () => {
      const optins = ['FLIN0001', 'MBLN0002'];
      const action = updateOptins({ optins });

      const expected: OneConfiguratorState = {
        ...initialState,
        optinsState: {
          ...initialState.optinsState,
          optins,
        },
      };

      const result: OneConfiguratorState = oneConfiguratorReducer(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('updatePriceAfterChangingOneSimToLimited', () => {
    it('should update price after changing one sim to limited', () => {
      const priceAfterChangingOneSimToLimited = { price: -7.4 };
      const action = updatePriceAfterChangingOneSimToLimited({ priceAfterChangingOneSimToLimited });

      const expected: OneConfiguratorState = {
        ...initialState,
        simsState: {
          ...initialState.simsState,
          priceAfterChangingOneSimToLimited,
        },
      };

      const result: OneConfiguratorState = oneConfiguratorReducer(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('updatePriceAfterChangingOneSimToUnlimited', () => {
    it('should update price after changing one sim to unlimited', () => {
      const priceAfterChangingOneSimToUnlimited = { price: 7.4 };
      const action = updatePriceAfterChangingOneSimToUnlimited({ priceAfterChangingOneSimToUnlimited });

      const expected: OneConfiguratorState = {
        ...initialState,
        simsState: {
          ...initialState.simsState,
          priceAfterChangingOneSimToUnlimited,
        },
      };

      const result: OneConfiguratorState = oneConfiguratorReducer(initialState, action);

      expect(result).toEqual(expected);
    });
  });
});
