import { createFeatureSelector, createSelector } from '@ngrx/store';
import { stateFeatureName } from './state.const';
import { ContactInfoState } from './contact-info.state';

export const featureState = createFeatureSelector<ContactInfoState>(stateFeatureName);

export const contactInfo = createSelector([featureState], (state: ContactInfoState) => {
  return state.contactInfo;
});
