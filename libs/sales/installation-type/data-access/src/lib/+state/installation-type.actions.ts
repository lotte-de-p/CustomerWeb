import { createAction, props } from '@ngrx/store';

export const setName = createAction('[installation-type] set Name', props<{ name: string }>());
