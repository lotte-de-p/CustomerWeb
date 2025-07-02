import { EventInterface, EventTypeEnum, StepEventBody } from '@sales/events/data-access';
import { installationAddressStepKey } from '../constants/installation-address.const';

export const installationAddressStepFinished: EventInterface<StepEventBody> = {
  eventType: EventTypeEnum.STEP_FINISHED,
  body: {
    stepKey: installationAddressStepKey,
  },
};
