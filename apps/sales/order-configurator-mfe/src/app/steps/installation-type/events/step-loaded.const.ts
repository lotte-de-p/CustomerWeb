import { EventInterface, EventTypeEnum, StepEventBody } from '@sales/events/data-access';
import { installationTypeStepKey } from '../config/config';

export const stepLoaded: EventInterface<StepEventBody> = {
  eventType: EventTypeEnum.STEP_LOADED,
  body: {
    stepKey: installationTypeStepKey,
  },
};
