import { summaryStateTestfactory } from './summary-state.testfactory';

export interface SummaryState {
  tocUrl: string;
}

export const defaultState: SummaryState = summaryStateTestfactory.build();
