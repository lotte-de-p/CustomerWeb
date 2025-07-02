import { ComponentStep, StepFacade } from '@sales/shared/data-access';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { OrderConfiguratorFacade } from '@sales/order-configurator/order-configurator-data-access';
import { take } from 'rxjs/operators';
import { stepConfig } from '../constants/step-config.const';

@Injectable({
  providedIn: 'root',
})
export class OrderConfiguratorService {
  constructor(
    private readonly stepFacade: StepFacade,
    private readonly orderConfiguratorFacade: OrderConfiguratorFacade
  ) {}

  initialiseFlow(): Observable<ComponentStep[]> {
    const componentSteps: ComponentStep[] = this.addSteps(stepConfig);

    return this.orderConfiguratorFacade.isInstallationAddressStepRequired().pipe(
      take(1),
      map((isStepRequired) => {
        if (!isStepRequired) {
          componentSteps.splice(0, 1);
        }
        return componentSteps;
      }),
      map((componentSteps) => {
        this.stepFacade.setStepConfig({ steps: componentSteps.map((step) => step.key.toString()) });
        return componentSteps;
      })
    );
  }

  private addSteps(stepConfig: ComponentStep[]) {
    const componentSteps: ComponentStep[] = [];
    stepConfig.forEach((stepConfig) => componentSteps.push(stepConfig));
    return componentSteps;
  }
}
