import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { ContractDetailsInterface } from './contract-details.interface';

export interface SmartPhoneInterface {
  identifier: string;
  msisdn: string;
  accountNumber: string;
  hwcvpItemCode?: string;
  productInfo: OmapiProduct;
  contract: ContractDetailsInterface;
}
