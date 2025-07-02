import { EventInterface, EventTypeEnum, StepEventBody } from '@sales/events/data-access';
import { easySwitchSelectionStepKey } from '../config/config';

export const stepLoaded: EventInterface<StepEventBody> = {
  eventType: EventTypeEnum.STEP_LOADED,
  body: {
    stepKey: easySwitchSelectionStepKey,
  },
};
