import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { OrderConfiguratorService } from './order-configurator.service';
import { StepFacade } from '@sales/shared/data-access';
import { OrderConfiguratorFacade } from '@sales/order-configurator/order-configurator-data-access';
import { installationAddressStepKey } from '../steps/installation-address/config/config';
import { installationTypeStepKey } from '../steps/installation-type/config/config';
import { appointmentStepKey } from '../steps/appointment/config/config';
import { deliveryStepKey } from '../steps/delivery/config/config';
import { summaryStepKey } from '../steps/summary/config/config';
import { thanksStepKey } from '../steps/thanks/config/config';
import { easySwitchSelectionStepKey } from '../steps/easy-switch-selection/config/config';
import { easySwitchConfigurationStepKey } from '../steps/easy-switch-configuration/config/config';

describe('OrderConfiguratorService', () => {
  let service: OrderConfiguratorService;
  let stepFacade: Partial<jest.Mocked<StepFacade>>;
  let orderConfiguratorFacade: Partial<jest.Mocked<OrderConfiguratorFacade>>;

  beforeEach(() => {
    stepFacade = {
      setStepConfig: jest.fn(),
    };

    orderConfiguratorFacade = {
      isInstallationAddressStepRequired: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        OrderConfiguratorService,
        { provide: StepFacade, useValue: stepFacade },
        { provide: OrderConfiguratorFacade, useValue: orderConfiguratorFacade },
      ],
    });

    service = TestBed.inject(OrderConfiguratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('initialiseFlow', () => {
    it('should return steps when installation address step is required', (done) => {
      orderConfiguratorFacade.isInstallationAddressStepRequired?.mockReturnValue(of(true));

      service.initialiseFlow().subscribe((steps) => {
        expect(steps.length).toBe(8);
        expect(steps[0].key).toBe('installation-address');
        expect(stepFacade.setStepConfig).toHaveBeenCalledWith({
          steps: [
            installationAddressStepKey,
            installationTypeStepKey,
            appointmentStepKey,
            deliveryStepKey,
            easySwitchSelectionStepKey,
            easySwitchConfigurationStepKey,
            summaryStepKey,
            thanksStepKey,
          ],
        });
        done();
      });
    });

    it('should return steps without installation address when not required', (done) => {
      orderConfiguratorFacade.isInstallationAddressStepRequired?.mockReturnValue(of(false));

      service.initialiseFlow().subscribe((steps) => {
        expect(steps.length).toBe(7);
        expect(steps[0].key).toBe('installation-type');
        expect(stepFacade.setStepConfig).toHaveBeenCalledWith({
          steps: [
            installationTypeStepKey,
            appointmentStepKey,
            deliveryStepKey,
            easySwitchSelectionStepKey,
            easySwitchConfigurationStepKey,
            summaryStepKey,
            thanksStepKey,
          ],
        });
        done();
      });
    });
  });
});
