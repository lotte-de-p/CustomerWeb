import { IncludedInterface } from './included.interface';
import { ProductUsageInterface } from './product/product-usage.interface';

export interface SharedInterface extends IncludedInterface {
  ZBR?: ProductUsageInterface[];
}
