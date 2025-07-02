import { TestBed } from '@angular/core/testing';
import { GoliathService } from './goliath.service';
import {
  Customer,
  Flow,
  GoliathFacade,
  SalesOrderState,
  ShoppingBasket,
  StateAction,
  StateActionEnum,
  StepNameEnum,
} from '@sales/goliath/data-access';
import { of } from 'rxjs';

// Mock service type
interface MockServiceType {
  detail: string;
}

describe('GoliathService', () => {
  let service: GoliathService;

  beforeEach(() => {
    const facadeMock: Partial<GoliathFacade> = {
      flows$: of([]), // Mock returning an empty array or relevant data as needed
      steps$: of([]),
      stateActions$: of([]),
      currentState$: of(StateActionEnum.EMPTY), // Mock with initial state or relevant state data
    };

    TestBed.configureTestingModule({
      providers: [GoliathService, { provide: GoliathFacade, useValue: facadeMock }],
    });

    service = TestBed.inject(GoliathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getRequiredFlows', () => {
    it('should filter flows based on their requirement', () => {
      const flows: Flow<MockServiceType>[] = [
        {
          name: 'Flow1',
          isRequired: (_basket: ShoppingBasket) => true,
          steps: [],
          stateActions: [],
        },
        {
          name: 'Flow2',
          isRequired: (_basket: ShoppingBasket) => false,
          steps: [],
          stateActions: [],
        },
      ];
      const shoppingBasket: ShoppingBasket = { items: [], omapiProducts: [] };
      const result = service.getRequiredFlows(flows, shoppingBasket);
      expect(result).toEqual([flows[0]]);
    });
  });

  describe('createActionsList', () => {
    it('should combine actions with afterExecutionHooks based on names', () => {
      const defaultActions: StateAction<MockServiceType>[] = [
        { name: StateActionEnum.CREATE_SALES_ORDER, afterExecutionHooks: [], weight: 0 },
        { name: StateActionEnum.ADD_ORDER_ITEMS, afterExecutionHooks: [], weight: 1 },
      ];
      const actionsToAdd: StateAction<MockServiceType>[][] = [
        [{ name: StateActionEnum.CREATE_SALES_ORDER, weight: 0 }],
        [{ name: StateActionEnum.ADD_ORDER_ITEMS, weight: 1 }],
      ];
      const result = service.createActionsList(defaultActions, actionsToAdd);
      expect(result.length).toBe(2);
      expect(result[0].afterExecutionHooks).toEqual([
        {
          name: StateActionEnum.CREATE_SALES_ORDER,
          weight: 0,
        },
      ]);
      expect(result[1].afterExecutionHooks).toEqual([
        {
          name: StateActionEnum.ADD_ORDER_ITEMS,
          weight: 1,
        },
      ]);
    });
  });

  describe('getStatesToProcess', () => {
    it('should return the states to process from current to target state', () => {
      const states = service.getStatesToProcess(
        SalesOrderState.SALES_ORDER_CREATED,
        SalesOrderState.INSTALLATION_CONFIGURED
      );
      expect(states).toEqual([
        SalesOrderState.ORDER_ITEMS_ADDED,
        SalesOrderState.ETF_NEEDED,
        SalesOrderState.ETF_HANDLED,
        SalesOrderState.INSTALLATION_CONFIGURED,
      ]);
    });

    it('should return the states to process from current to target state including INITIALIZED when starting from INITIALIZED', () => {
      const states = service.getStatesToProcess(SalesOrderState.INITIALIZED, SalesOrderState.INSTALLATION_CONFIGURED);
      expect(states).toEqual([
        SalesOrderState.INITIALIZED,
        SalesOrderState.SALES_ORDER_CREATED,
        SalesOrderState.ORDER_ITEMS_ADDED,
        SalesOrderState.ETF_NEEDED,
        SalesOrderState.ETF_HANDLED,
        SalesOrderState.INSTALLATION_CONFIGURED,
      ]);
    });

    it('should warn and return an empty array if current state is later than target', () => {
      jest.spyOn(console, 'warn').mockImplementation();
      const result = service.getStatesToProcess(
        SalesOrderState.INSTALLATION_CONFIGURED,
        SalesOrderState.SALES_ORDER_CREATED
      );
      expect(result).toEqual([]);
      expect(console.warn).toHaveBeenCalledWith(
        'Current state is later in the sequence than the target state. No states to process.'
      );
    });
  });

  describe('getSteps', () => {
    it('should filter and collect required steps from flows', () => {
      const flows: Flow<MockServiceType>[] = [
        {
          name: 'testflow',
          isRequired: () => true,
          steps: [
            {
              name: StepNameEnum.INSTALLATION_ADDRESS,
              isRequired: () => true,
              requiredStateBeforeLoad: { state: SalesOrderState.SALES_ORDER_CREATED },
            },
            {
              name: StepNameEnum.ETF,
              isRequired: () => false,
              requiredStateBeforeLoad: { state: SalesOrderState.ETF_HANDLED },
            },
          ],
          stateActions: [],
        },
      ];
      const shoppingBasket: ShoppingBasket = { items: [], omapiProducts: [] };
      const customer: Customer = { needsEtf: false };
      const steps = service.getSteps(flows, shoppingBasket, customer);
      expect(steps.length).toBe(1);
      expect(steps[0].name).toBe(StepNameEnum.INSTALLATION_ADDRESS);
    });
  });
});
