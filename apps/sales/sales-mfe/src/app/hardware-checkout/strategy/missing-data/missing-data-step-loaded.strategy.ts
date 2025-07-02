import { ValidationElementEnum } from '@sales/hardware-checkout/data-access';
import { StepFacade } from '@sales/shared/data-access';
import { Observable, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { HardwareCheckoutFacade } from '../../facades/hardware-checkout.facade';
import { EventStrategy } from '../../interfaces/event-strategy.interface';

export class MissingDataStepLoadedStrategy implements EventStrategy {
  constructor(
    private readonly hardwareCheckoutFacade: HardwareCheckoutFacade,
    private readonly stepFacade: StepFacade
  ) {}

  execute(): Observable<boolean> {
    return this.hardwareCheckoutFacade.salesOrderFromState$.pipe(
      take(1),
      mergeMap((salesOrder) => {
        if (salesOrder?.validationElements) {
          const hasCustomerInfoNotFilled = salesOrder.validationElements.some(
            (validationElement) => validationElement.typeOfProblem === ValidationElementEnum.CUSTOMER_INFO_NOT_FILLED
          );
          if (!hasCustomerInfoNotFilled) {
            this.stepFacade.goToNextStep();
          }
        }
        return of(true);
      })
    );
  }

  showLoader(): boolean {
    return false;
  }
}
