import { OrderResultInterface } from '@sales/order-configurator/domain-installation-address';
import { CustomerAccount } from '@sales/order-configurator/customer-account/domain';
import { Offer } from '@sales/order-configurator/offer/domain';

export interface Loading {
  loadingOffer: boolean;
  loadingCustomerAccount: boolean;
}

export interface OrderConfiguratorState {
  orderNumber: string | undefined;
  orderResult: OrderResultInterface | undefined;
  customerAccount: CustomerAccount | undefined;
  errors: Error[];
  loading: Loading;
  offer: Offer | undefined;
}

export const defaultState: OrderConfiguratorState = {
  orderNumber: '95845154645',
  orderResult: undefined,
  customerAccount: undefined,
  errors: [],
  loading: {
    loadingOffer: true,
    loadingCustomerAccount: true,
  },
  offer: undefined,
};
