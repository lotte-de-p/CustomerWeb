import { Engagement } from '../engagement.model';

export interface EngagementState {
  engagementList: Engagement[];
}

export const defaultState: EngagementState = {
  engagementList: [],
};
