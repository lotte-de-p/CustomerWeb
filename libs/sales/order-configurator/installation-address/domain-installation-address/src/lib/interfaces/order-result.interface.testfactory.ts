import { Factory } from 'fishery';
import { OrderResultInterface } from './order-result.interface';

export const orderResultInterfaceTestFactory = Factory.define<OrderResultInterface>(() => {
  return {
    addressId: '123456789',
    status: 'true',
  };
});
