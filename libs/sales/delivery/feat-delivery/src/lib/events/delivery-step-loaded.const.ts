import { EventInterface, EventTypeEnum, StepEventBody } from '@sales/events/data-access';
import { deliveryEventStepKey } from '../constants/delivery-event-step-key.const';

export const deliveryStepLoaded: EventInterface<StepEventBody> = {
  eventType: EventTypeEnum.STEP_LOADED,
  body: {
    stepKey: deliveryEventStepKey,
  },
};
