import { RawPricesInterface } from './raw/raw-prices.interface';

export interface ContractDetailsInterface {
  obligationEndDate: string;
  duration: number;
  price: RawPricesInterface;
}
