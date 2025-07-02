import { EventInterface, EventTypeEnum, StepEventBody } from '@sales/events/data-access';
import { summaryEventStepKey } from '../constants/summary-event-step-key.const';

export const summaryStepLoaded: EventInterface<StepEventBody> = {
  eventType: EventTypeEnum.STEP_LOADED,
  body: {
    stepKey: summaryEventStepKey,
  },
};
