import { StepEventBody } from '@sales/events/data-access';

export interface etfResponseIdObject {
  id: string;
}

export interface etfResponse extends StepEventBody {
  stepKey: string;
  targetOrderItemIdsToDiscount: etfResponseIdObject[];
  existingDiscountsToRemove: etfResponseIdObject[];
}
