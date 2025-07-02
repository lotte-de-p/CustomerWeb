import { OmapiProduct } from '@telenet/ng-lib-omapi';

export class TrialPack {
  id?: string;
  label: string;
  productInfo?: OmapiProduct;
  status: string;
  deactivationDate?: Date;
}
