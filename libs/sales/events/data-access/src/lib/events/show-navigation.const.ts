import { EventInterface } from '../interfaces/event.interface';
import { EventTypeEnum } from '../enums/event-type.enum';

export const showNavigationEvent: EventInterface = {
  eventType: EventTypeEnum.SHOW_NAVIGATION,
};
