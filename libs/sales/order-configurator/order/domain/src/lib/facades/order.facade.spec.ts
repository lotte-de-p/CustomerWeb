import { TestBed } from '@angular/core/testing';
import { OrderFacade } from './order-facade.service';
import { Order, orderTestfactory } from '../interfaces';

describe('orderFacade', () => {
  let facade: OrderFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderFacade],
    });

    facade = TestBed.inject(OrderFacade);
  });

  it('should return a valid customer account', (done) => {
    const mockInfo: Order = orderTestfactory.build();

    facade.getOrder().subscribe((order: Order) => {
      expect(order.deliveryPrice).toEqual(mockInfo.deliveryPrice);
      expect(order.installationCost).toEqual(mockInfo.installationCost);

      expect(order.totalDiscountedCost).toEqual(expect.any(Function));
      expect(order.totalOrderCost).toEqual(expect.any(Function));
      done();
    });
  });
});
