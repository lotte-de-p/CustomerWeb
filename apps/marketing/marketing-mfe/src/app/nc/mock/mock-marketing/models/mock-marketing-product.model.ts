export class MockMarketingProduct {
  sku: string;
  title: string;
  type: string;
  description?: string;
  price?: string;
  addOns?: MockMarketingProduct[];
  enableDiscount?: boolean;
  isPimConfiguredProduct?: boolean;
}
