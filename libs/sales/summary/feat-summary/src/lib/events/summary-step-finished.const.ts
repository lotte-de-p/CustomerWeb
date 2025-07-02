import { EventInterface, EventTypeEnum, StepEventBody } from '@sales/events/data-access';

export const summaryStepFinished: EventInterface<StepEventBody> = {
  eventType: EventTypeEnum.STEP_FINISHED,
  body: {
    stepKey: 'order-confirmation',
  },
};
