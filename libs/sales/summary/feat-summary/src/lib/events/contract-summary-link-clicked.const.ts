import { SummaryEventTypeEnum } from '../enums/event-type.enum';
import { EventInterface } from '@sales/events/data-access';

export const contractSummaryLinkClicked: EventInterface = {
  eventType: SummaryEventTypeEnum.SHOW_CONTRACT_SUMMARY,
};
