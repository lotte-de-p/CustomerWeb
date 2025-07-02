import { createFeatureSelector } from '@ngrx/store';

import { EngagementState } from './engagement.state';

export const featureState = createFeatureSelector<EngagementState>('engagementFeature');
