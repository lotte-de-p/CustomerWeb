import { EventInterface, EventTypeEnum, StepEventBody } from '@sales/events/data-access';
import { InstallationAddressStepKey } from '../constants/installation-address.const';

export const installationAddressStepFinished: EventInterface<StepEventBody> = {
  eventType: EventTypeEnum.STEP_FINISHED,
  body: {
    stepKey: InstallationAddressStepKey,
  },
};
