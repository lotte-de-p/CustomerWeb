import { createAction, props } from '@ngrx/store';
import { EventInterface } from '../interfaces/event.interface';

export const triggerEvent = createAction('[event]', props<EventInterface<unknown | undefined>>());
