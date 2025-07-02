import { createAction, props } from '@ngrx/store';
import { HomeNetwork } from '../home-network.model';

export const getHomeNetworkList = createAction('[ - home-network] get home-network list');
export const getHomeNetworkListSuccessAction = createAction(
  '[home-network] get home-network list success response',
  props<{ homeNetworkList: HomeNetwork[] }>()
);

export const getErrorAction = createAction('[home-network] get home-network list Error', props<{ error: Error }>());
