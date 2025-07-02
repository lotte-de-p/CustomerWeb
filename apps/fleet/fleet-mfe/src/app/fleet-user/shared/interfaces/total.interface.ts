import { TotalUsageInterface } from './usage/total-usage.interface';

export interface TotalInterface {
  monetary: TotalUsageInterface;
  data: TotalUsageInterface;
  text: TotalUsageInterface;
  voice: TotalUsageInterface;
}
