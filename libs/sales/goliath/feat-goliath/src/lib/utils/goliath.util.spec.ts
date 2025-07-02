import { GoliathUtil } from './goliath.util';
import { Flow, SalesOrderState, Step, StepNameEnum } from '@sales/goliath/data-access';
import { StepComponent } from '@sales/shared/data-access';
import { Observable, of } from 'rxjs';

interface MockServiceType {
  details: string; // example property to represent service specific data
}

class MockStepComponent implements StepComponent {
  onNextStep(): Observable<boolean> {
    return of(true); // Simulating onNextStep behavior, make sure to import `of` from 'rxjs'
  }
}

describe('GoliathUtil', () => {
  describe('removeComponentsFromFlows', () => {
    it('should remove the component property from all steps in all flows', () => {
      const mockFlows: Flow<MockServiceType>[] = [
        {
          name: 'Flow1',
          steps: [
            {
              name: StepNameEnum.INSTALLATION_ADDRESS,
              component: MockStepComponent,
              requiredStateBeforeLoad: { state: SalesOrderState.SALES_ORDER_CREATED },
              isRequired: jest.fn(),
            },
            {
              name: StepNameEnum.ETF,
              component: MockStepComponent,
              requiredStateBeforeLoad: { state: SalesOrderState.ETF_NEEDED },
              isRequired: jest.fn(),
            },
          ],
          isRequired: jest.fn(), // Adjust this function as required by the actual implementation.
          stateActions: [],
        },
        {
          name: 'Flow2',
          steps: [
            {
              name: StepNameEnum.MOBILE_CONFIGURATION,
              component: MockStepComponent,
              requiredStateBeforeLoad: { state: SalesOrderState.ORDER_ITEMS_ADDED },
              isRequired: jest.fn(),
            },
            {
              name: StepNameEnum.FIXED_TELEPHONY,
              component: MockStepComponent,
              requiredStateBeforeLoad: { state: SalesOrderState.INSTALLATION_CONFIGURED },
              isRequired: jest.fn(),
            },
          ],
          isRequired: jest.fn(), // Adjust this function as required by the actual implementation.
          stateActions: [],
        },
      ];

      const expectedFlows: Flow<MockServiceType>[] = mockFlows.map((flow) => ({
        ...flow,
        steps: flow.steps.map((step) => ({
          ...step,
          component: undefined,
        })),
      }));

      const result = GoliathUtil.removeComponentsFromFlows(mockFlows);
      expect(result).toEqual(expectedFlows);
    });
  });

  describe('removeComponentsFromSteps', () => {
    it('should remove the component property from all steps', () => {
      const mockSteps: Step[] = [
        {
          name: StepNameEnum.DELIVERY,
          component: MockStepComponent,
          requiredStateBeforeLoad: { state: SalesOrderState.DELIVERY_CALCULATED },
          isRequired: jest.fn(),
        },
        {
          name: StepNameEnum.EASY_SWITCH,
          component: MockStepComponent,
          requiredStateBeforeLoad: { state: SalesOrderState.SALES_ORDER_SUBMITTED },
          isRequired: jest.fn(),
        },
      ];

      const expectedSteps: Step[] = mockSteps.map((step) => ({
        ...step,
        component: undefined,
      }));

      const result = GoliathUtil.removeComponentsFromSteps(mockSteps);
      expect(result).toEqual(expectedSteps);
    });
  });
});
