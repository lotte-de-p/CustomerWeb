import { OrderItem } from './order-item.model';
import { Prices } from './prices.model';
import { CharacteristicsInterface } from '../interfaces/characteristics.interface';
import { OmapiProduct } from '@telenet/ng-lib-omapi';

export class DeliveryItem {
  id: string;
  name: string;
  type: string;
  prices: Prices;
  locationId: string;
  parentId: string;
  productInfo: OmapiProduct;
  chars: CharacteristicsInterface;
  orderItems: OrderItem[];
  status: string;
}
