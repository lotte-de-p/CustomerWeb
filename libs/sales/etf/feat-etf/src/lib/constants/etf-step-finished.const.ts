import { EventInterface, EventTypeEnum } from '@sales/events/data-access';
import { etfEventStepKey } from './etf-event-step-key.const';
import { etfResponse, etfResponseIdObject } from '../interfaces/response-model.interface';

export const createEtfStepViewed = (
  discountIdsToRemove: { id: string }[],
  orderItemsToAddDiscounts: etfResponseIdObject[]
): EventInterface<etfResponse> => {
  return {
    eventType: EventTypeEnum.STEP_FINISHED,
    body: {
      stepKey: etfEventStepKey,
      existingDiscountsToRemove: discountIdsToRemove,
      targetOrderItemIdsToDiscount: orderItemsToAddDiscounts,
    },
  };
};
