export interface Discount {
  name: string;
  amount: number;
}

export interface OrderItem {
  name: string;
  price: number;
  discount?: Discount;
  image: string;
  paymentOption: PaymentOption;

  discountedPrice(): number;
}

export interface Order {
  orderItems: OrderItem[];
  deliveryPrice?: number;
  installationCost?: number;

  totalOrderCost(): number;

  monthlyTotalOrderCost(): number;

  oneTimeTotalOrderCost(): number;

  totalDiscountedCost(): number;
}

export enum PaymentOption {
  OneTime = 'ONE_TIME',
  Monthly = 'MONTHLY',
}

export function createOrder(
  order: Omit<Order, 'totalOrderCost' | 'monthlyTotalOrderCost' | 'oneTimeTotalOrderCost' | 'totalDiscountedCost'>
): Order {
  return {
    orderItems: order.orderItems,
    deliveryPrice: order.deliveryPrice,
    installationCost: order.installationCost,

    totalOrderCost(): number {
      const itemsCost = this.orderItems.reduce((total, item) => total + item.discountedPrice(), 0);
      const delivery = this.deliveryPrice ?? 0; // Default to 0 if undefined
      const installation = this.installationCost ?? 0; // Default to 0 if undefined
      return itemsCost + delivery + installation;
    },

    monthlyTotalOrderCost(): number {
      return this.orderItems
        .filter((item) => item.paymentOption === PaymentOption.Monthly)
        .reduce((total, item) => total + item.discountedPrice(), 0);
    },

    oneTimeTotalOrderCost(): number {
      return this.orderItems
        .filter((item) => item.paymentOption === PaymentOption.OneTime)
        .reduce((total, item) => total + item.discountedPrice(), 0);
    },

    totalDiscountedCost(): number {
      return this.orderItems.reduce((total, item) => total + item.discountedPrice(), 0);
    },
  };
}
