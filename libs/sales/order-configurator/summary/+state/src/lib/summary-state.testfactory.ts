import { SummaryState } from './summary.state';
import { Factory } from 'fishery';

export const summaryStateTestfactory = Factory.define<SummaryState>(() => {
  return { tocUrl: 'https://www.google.be' };
});
