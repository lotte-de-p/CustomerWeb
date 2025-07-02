import { EventInterface, EventTypeEnum, StepEventBody } from '@sales/events/data-access';

export const missingDataStepKey = 'missing-data';

export const missingDataStepLoaded: EventInterface<StepEventBody> = {
  eventType: EventTypeEnum.STEP_LOADED,
  body: {
    stepKey: missingDataStepKey,
  },
};

export const missingDataStepFinished: EventInterface<StepEventBody> = {
  eventType: EventTypeEnum.STEP_FINISHED,
  body: {
    stepKey: missingDataStepKey,
  },
};
