import { EventInterface, EventTypeEnum, StepEventBody } from '@sales/events/data-access';
import { installationAddressStepKey } from '../constants/installation-address.const';

export const installationAddressStepLoaded: EventInterface<StepEventBody> = {
  eventType: EventTypeEnum.STEP_LOADED,
  body: {
    stepKey: installationAddressStepKey,
  },
};
