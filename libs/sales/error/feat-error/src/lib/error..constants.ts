import { EventInterface, EventTypeEnum, StepEventBody } from '@sales/events/data-access';

export const errorStepLoaded: EventInterface<StepEventBody> = {
  eventType: EventTypeEnum.STEP_LOADED,
  body: {
    stepKey: 'error-screen',
  },
};
