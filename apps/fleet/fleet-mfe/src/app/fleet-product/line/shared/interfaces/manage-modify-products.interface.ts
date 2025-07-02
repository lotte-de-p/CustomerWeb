export interface ManageModifyProductsInterface {
  productIdentifier?: string;
  offers?: IOffer[];
}

interface IOffer {
  id: string;
  type?: string;
  action?: string;
  offers?: IOffer[];
  orderItemId?: string;
  chars?: unknown;
}
