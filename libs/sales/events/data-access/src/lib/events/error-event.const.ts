import { EventInterface } from '../interfaces/event.interface';
import { EventTypeEnum } from '../enums/event-type.enum';
import { ErrorEventBody } from '../interfaces/error-event-body.interface';

export const ErrorEvent = (error: unknown): EventInterface<ErrorEventBody> => {
  return {
    eventType: EventTypeEnum.ERROR,
    body: {
      error: error,
    },
  };
};
