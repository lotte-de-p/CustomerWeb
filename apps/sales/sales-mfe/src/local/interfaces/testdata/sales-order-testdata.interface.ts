import { ProductTestData } from './product-testdata.interface';

export interface SalesOrderTestdata {
  existingProducts?: ProductTestData[];
  newProducts?: ProductTestData[];
  deliveryOrderItem?: ProductTestData;
  hasBigItem?: boolean;
}
