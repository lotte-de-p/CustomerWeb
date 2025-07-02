import { CharacteristicsInterface, OrderItem } from './order-item.model';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { Prices } from './prices.model';

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
