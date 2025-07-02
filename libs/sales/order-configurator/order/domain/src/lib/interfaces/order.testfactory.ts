import { Factory } from 'fishery';
import { createOrder, Discount, Order, OrderItem, PaymentOption } from './order.interface';

export const discountTestfactory = Factory.define<Discount>(() => {
  return {
    name: 'Test Discount',
    amount: 10,
  };
});

export const orderItemTestfactory = Factory.define<OrderItem>(() => {
  return {
    name: 'Test Product',
    price: 100,
    discount: discountTestfactory.build(),
    image: 'test-image-url-1',
    paymentOption: PaymentOption.OneTime,
    discountedPrice(): number {
      return this.price - (this.discount ? this.discount.amount : 0);
    },
  };
});

export const orderItemOneUpTestfactory = Factory.define<OrderItem>(() => {
  return {
    name: 'One Up',
    price: 78,
    discount: discountTestfactory.build({ name: 'Telenet klantenkorting', amount: 23 }),
    image: 'test-image-url-2',
    paymentOption: PaymentOption.Monthly,
    discountedPrice(): number {
      return this.price - (this.discount ? this.discount.amount : 0);
    },
  };
});

export const orderItemSamsungGalaxyTestfactory = Factory.define<OrderItem>(() => {
  return {
    name: 'Samsung galaxy +',
    price: 699,
    discount: discountTestfactory.build({ name: 'Black friday', amount: 60 }),
    image: 'test-image-url-3',
    paymentOption: PaymentOption.OneTime,
    discountedPrice(): number {
      return this.price - (this.discount ? this.discount.amount : 0);
    },
  };
});

export const orderTestfactory = Factory.define<Order>(() => {
  const orderData: Omit<
    Order,
    'totalOrderCost' | 'monthlyTotalOrderCost' | 'oneTimeTotalOrderCost' | 'totalDiscountedCost'
  > = {
    orderItems: [orderItemOneUpTestfactory.build(), orderItemSamsungGalaxyTestfactory.build()],
    deliveryPrice: 20,
    installationCost: 30,
  };

  return createOrder(orderData);
});
