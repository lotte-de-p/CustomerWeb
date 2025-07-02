import { EventInterface } from '../interfaces/event.interface';
import { EventTypeEnum } from '../enums/event-type.enum';

export const hideNavigationEvent: EventInterface = {
  eventType: EventTypeEnum.HIDE_NAVIGATION,
};
