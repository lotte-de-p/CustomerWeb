import { EventInterface, EventTypeEnum, StepEventBody } from '@sales/events/data-access';
import { appointmentStepKey } from '../config/config';

export const stepLoaded: EventInterface<StepEventBody> = {
  eventType: EventTypeEnum.STEP_LOADED,
  body: {
    stepKey: appointmentStepKey,
  },
};
