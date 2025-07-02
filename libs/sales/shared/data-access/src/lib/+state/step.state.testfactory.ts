import * as Factory from 'factory.ts';
import { StepState } from './step.state';

export const stepFactory = Factory.Sync.makeFactory<StepState>({
  stepFeature: {
    stepKeys: ['1', '2'],
    currentStepKey: '1',
    showNavigation: true,
    showBackButton: true,
  },
});
