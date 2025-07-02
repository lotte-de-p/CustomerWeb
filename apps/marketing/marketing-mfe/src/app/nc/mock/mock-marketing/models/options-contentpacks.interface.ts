import { OmapiProduct } from '@telenet/ng-lib-omapi';

interface OptionContentPackItem {
  option: ProductOptionsContentpacks[];
  contentPack?: ProductOptionsContentpacks[];
}

export type OptionContentPackType = Record<string, Record<string, OptionContentPackItem>>;

export interface ProductOptionsContentpacks {
  id: string;
  label: string;
  type: string;
  productInfo?: OmapiProduct;
}
