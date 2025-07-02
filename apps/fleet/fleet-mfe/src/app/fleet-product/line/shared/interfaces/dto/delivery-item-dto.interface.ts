import { PricesDto } from './prices-dto.interface';
import { RawOmapiProductInterface } from '@telenet/ng-lib-omapi';
import { OrderItemDto } from './order-item-dto.interface';
import { CharsInterface } from '../chars.interface';

export interface DeliveryItemDto {
  id: string;
  name: string;
  type?: string;
  prices: PricesDto;
  locationId: string;
  parentId: string;
  specurl: string;
  rawOmapi?: RawOmapiProductInterface;
  chars: CharsInterface;
  orderItems: OrderItemDto[];
  status: string;
}
