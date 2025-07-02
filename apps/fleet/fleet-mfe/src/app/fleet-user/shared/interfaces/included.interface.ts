import { ProductUsageInterface } from './product/product-usage.interface';
import { UsageOptionInterface } from './usage/usage-option.interface';

export interface IncludedInterface {
  monetary: ProductUsageInterface[];
  data: ProductUsageInterface[];
  text: ProductUsageInterface[];
  voice: ProductUsageInterface[];
  option?: UsageOptionInterface;
}
