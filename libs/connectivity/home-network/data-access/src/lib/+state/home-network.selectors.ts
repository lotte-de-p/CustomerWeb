import { createFeatureSelector } from '@ngrx/store';

import { HomeNetworkState } from './home-network.state';

export const featureState = createFeatureSelector<HomeNetworkState>('homeNetworkFeature');
