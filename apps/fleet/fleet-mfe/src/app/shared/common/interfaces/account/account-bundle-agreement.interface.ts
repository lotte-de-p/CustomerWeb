import { OmapiProduct } from '@telenet/ng-lib-omapi';

export interface AccountMasterAgreementInterface {
  activeMSA: MasterAgreement[];
}

export interface MasterAgreement {
  bundles: Bundle[];
}

export interface Bundle {
  activePlan: boolean;
  externalProductCode: string;
  name: string;
  productInfo: OmapiProduct;
}
