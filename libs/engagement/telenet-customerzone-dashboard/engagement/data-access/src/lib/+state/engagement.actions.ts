import { createAction, props } from '@ngrx/store';
import { Engagement } from '../engagement.model';

export const getEngagementList = createAction('[engagement - engagement] get engagement list');
export const getEngagementListSuccessAction = createAction(
  '[engagement] get engagement list success response',
  props<{ engagementList: Engagement[] }>()
);

export const getErrorAction = createAction('[engagement] get engagement list Error', props<{ error: Error }>());
