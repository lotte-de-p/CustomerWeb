import { EventInterface } from '../interfaces/event.interface';

export interface EventState {
  event: EventInterface<unknown | undefined> | undefined;
}

export const defaultState: EventState = {
  event: undefined,
};
