import { EventInterface, EventTypeEnum, StepEventBody } from '@sales/events/data-access';
import { deliveryEventStepKey } from '../constants/delivery-event-step-key.const';

export const deliveryStepFinished: EventInterface<StepEventBody> = {
  eventType: EventTypeEnum.STEP_FINISHED,
  body: {
    stepKey: deliveryEventStepKey,
  },
};
