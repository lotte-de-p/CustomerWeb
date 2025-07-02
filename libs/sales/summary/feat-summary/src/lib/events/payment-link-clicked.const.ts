import { EventInterface } from '@sales/events/data-access';
import { SummaryEventTypeEnum } from '../enums/event-type.enum';

export const paymentLinkClicked: EventInterface = {
  eventType: SummaryEventTypeEnum.PAYMENT,
};
