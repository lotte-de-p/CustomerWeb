import { Cart } from 'udl';

export interface StepFlowAnalyticsConfig {
  analyticsIntent: string;
  analyticsFlowType: string;
  cart?: Cart;
}
