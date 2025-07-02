import { ProductUsageInterface } from './product/product-usage.interface';

export interface SharedBundlesInterface {
  monetary: ProductUsageInterface[];
  data: ProductUsageInterface[];
  text: ProductUsageInterface[];
  voice: ProductUsageInterface[];
}
