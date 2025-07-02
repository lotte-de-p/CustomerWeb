import { EventInterface, EventTypeEnum, StepEventBody } from '@sales/events/data-access';
import { thankYouEventStepKey } from '../constants/thank-you-event-step-key.const';

export const thankYouStepLoaded: EventInterface<StepEventBody> = {
  eventType: EventTypeEnum.STEP_LOADED,
  body: {
    stepKey: thankYouEventStepKey,
  },
};
