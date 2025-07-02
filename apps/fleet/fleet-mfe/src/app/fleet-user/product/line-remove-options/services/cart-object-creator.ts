import { ManageProductsRequest } from '../../../shared/interfaces/manage-product-request.interface';
import { Cart, Item, ItemBuilder, ProductBuilder } from 'udl';
import { CartBuilder } from 'udl/dist/models/cart';
import { Product as ProductInfo } from 'udl/dist/models/product';
import { OrderItem } from '../../../shared/models/order-item.model';
import { SalesOrder } from '../../../shared/models/sales-order.model';

export class CartObjectCreator {
  static createCartObjectForRemovedItem(salesOrder: SalesOrder, removedItems: ManageProductsRequest[]): Cart {
    if (!salesOrder || !salesOrder.id) {
      return;
    }
    let cart = new CartBuilder().withCartId(salesOrder.id).build();
    const itemIds = [];

    if (removedItems) {
      removedItems.forEach((removedItem) => {
        removedItem.offers.forEach((item) => {
          if (!itemIds.includes(item.id)) {
            itemIds.push(item.id);
            cart.addItem(this.populateExistingProductInfo(item.id, item.type));
          }
        });
      });
    }
    if (salesOrder.lineItems) {
      cart = this.loopLineItems(salesOrder, cart);
    }
    return cart;
  }

  private static populateExistingProductInfo(id, type): Item {
    const product: ProductInfo = new ProductBuilder().withProductId(id).withProductType(type).build();
    return new ItemBuilder().withProductInfo(product).build();
  }

  private static loopLineItems(salesOrder: SalesOrder, cart: Cart): Cart {
    salesOrder.lineItems.forEach((lineItem) => {
      lineItem.orderItems.forEach((orderItem) => {
        orderItem.orderItems.forEach((subOrderItem) => {
          if (subOrderItem.status.toUpperCase() === 'DISCONNECT') {
            this.addItemToCart(cart, subOrderItem);
          }
        });
        if (orderItem.status.toUpperCase() === 'ACTIVE') {
          delete orderItem.orderItems;
          this.addItemToCart(cart, orderItem);
        }
      });
    });
    return cart;
  }

  private static addItemToCart(cart: Cart, item: OrderItem): Cart {
    cart.addItem(this.populateExistingProductInfo(item.id, item.type));
    return cart;
  }
}
