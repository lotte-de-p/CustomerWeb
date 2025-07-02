import { SaleType } from '../../enums/sale-type.enum';
import { DtvBoxType } from '../../enums/dtv-box-type.enum';

export interface RawDtvBox {
  id: string;
  name: string;
  type: DtvBoxType;
  saleType: SaleType;
  macAddress?: string;
  serialNumber: string;
  modelNumber?: string;
}
