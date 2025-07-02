import { OmapiProduct } from '@telenet/ng-lib-omapi';

export interface TIPContractInterface {
  activationDate: string;
  cancellationDate?: string;
  planName: string;
  customerProductId: string;
  epc: string;
  specUrl: string;
  productInfo?: OmapiProduct;
  status?: string;
  tipMRC: TIPChargeInterface;
  tipNRC: TIPChargeInterface;
  tipUsage: TIPChargeInterface;
  noOfEmployees: string;
  normalizedStatus: string;
  futureProcessingDate?: string;
  displayPlanName?: string;
}

export interface TIPChargeInterface {
  vatExcl: string;
  vatIncl: string;
}
