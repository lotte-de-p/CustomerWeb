import { EventInterface, EventTypeEnum, StepEventBody } from '@sales/events/data-access';
import { installationAddressStepKey } from '../config/config';

export const installationAddressStepLoaded: EventInterface<StepEventBody> = {
  eventType: EventTypeEnum.STEP_LOADED,
  body: {
    stepKey: installationAddressStepKey,
  },
};
