import { RawOmapiProductInterface } from '@telenet/ng-lib-omapi';

export interface RawTIPContractInterface {
  activationDate: string;
  cancellationDate?: string;
  planName: string;
  friendlyPlanName?: string;
  customerProductId: string;
  epc: string;
  specUrl: string;
  rawOmapi?: RawOmapiProductInterface;
  status?: string;
  tipMRC: RawTIPChargeInterface;
  tipNRC: RawTIPChargeInterface;
  tipUsage: RawTIPChargeInterface;
  noOfEmployees: string;
  futureProcessingDate?: string;
}

export interface RawTIPChargeInterface {
  vatExcl: string;
  vatIncl: string;
}
