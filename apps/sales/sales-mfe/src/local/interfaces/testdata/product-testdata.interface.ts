import { ProductCharsTestdata } from './product-chars-testdata.interface';
import { DiscountTestData } from './discount-testdata.interface';

export interface ProductTestData {
  id: string;
  itemCode?: string;
  name: string;
  customerProductItemId: string;
  discount?: DiscountTestData;
  chars?: ProductCharsTestdata;
}
