import { createAction, props } from '@ngrx/store';

export const setName = createAction('[appointment] set Name', props<{ name: string }>());
