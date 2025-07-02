import { TranslateModule } from '@ngx-translate/core';
import { OrderItemWithTerminationComponent } from './order-item-with-termination.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { pricesTestFactory, Rule } from '@sales/hardware-checkout/data-access';

describe('OrderItemWithTerminationComponent', () => {
  let component: OrderItemWithTerminationComponent;
  let fixture: ComponentFixture<OrderItemWithTerminationComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderItemWithTerminationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setOrderItemTerminationState', () => {
    it('should trigger next with the order item', () => {
      jest.spyOn(component.showEtfOptionsEvent, 'next');
      const orderItemWithDiscount = {
        name: 'name',
        id: 'id',
        rule: {} as Rule,
        showEtfOptions: false,
        hasMadeASelection: false,
        prices: pricesTestFactory.build(),
      };
      component.setOrderItemTerminationState(orderItemWithDiscount);

      expect(component.showEtfOptionsEvent.next).toHaveBeenCalledWith(orderItemWithDiscount);
    });
  });
});
