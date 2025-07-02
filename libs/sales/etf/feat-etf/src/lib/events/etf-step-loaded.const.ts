import { EventInterface, EventTypeEnum, StepEventBody } from '@sales/events/data-access';
import { etfEventStepKey } from '../constants/etf-event-step-key.const';

export const etfStepLoaded: EventInterface<StepEventBody> = {
  eventType: EventTypeEnum.STEP_LOADED,
  body: {
    stepKey: etfEventStepKey,
  },
};
