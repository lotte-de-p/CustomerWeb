import { RawOmapiProductInterface } from '@telenet/ng-lib-omapi';

export interface RawAccountMasterAgreementInterface {
  activeMSA: RawMasterAgreement[];
}

export interface RawMasterAgreement {
  bundles: RawBundle[];
}

export interface RawBundle {
  activePlan: boolean;
  externalProductCode: string;
  name: string;
  specurl: string;
  rawOmapi: RawOmapiProductInterface;
}
