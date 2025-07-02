import { makeFactory } from 'factory.ts';
import { EventState } from './event.state';
import { EventInterface } from '../interfaces/event.interface';
import { EventTypeEnum } from '../enums/event-type.enum';
import { AnalyticsInterface } from '../interfaces/analytics.interface';
import { AnalyticsTypeEnum } from '../enums/analytics-type.enum';

export const eventFactory = makeFactory<EventInterface<{ key: string }>>({
  eventType: EventTypeEnum.STEP_LOADED,
  body: {
    key: 'THIS_IS_A_LOADED_TEST',
  },
});
export const eventStateFactory = makeFactory<EventState>({
  event: eventFactory.build(),
});

export const eventBodyFactory = makeFactory(<AnalyticsInterface>{
  type: AnalyticsTypeEnum.CLICK,
  name: '',
});

export const analyticsEventFactory = makeFactory<EventInterface<AnalyticsInterface>>({
  eventType: EventTypeEnum.ANALYTICS,
});
