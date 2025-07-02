import { PricesDto } from './dto/prices-dto.interface';

export interface ContractDetailsInterface {
  obligationEndDate: string;
  duration: string;
  price: PricesDto;
}
