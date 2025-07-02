import { TranslateModule } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { orderItemsWithDiscountStateFactory } from '@sales/etf/data-access';
import { OrderItemMarkedAsNoDiscountComponent } from './order-item-marked-as-no-discount.component';

describe('OrderItemMarkedAsNoDiscountComponent', () => {
  let component: OrderItemMarkedAsNoDiscountComponent;
  let fixture: ComponentFixture<OrderItemMarkedAsNoDiscountComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderItemMarkedAsNoDiscountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('selectForDiscount', () => {
    it('should', () => {
      jest.spyOn(component.setOrderMarkedForDiscount, 'next');
      const orderItemWithDiscount = orderItemsWithDiscountStateFactory.build();
      component.selectForDiscount(orderItemWithDiscount);
      expect(component.setOrderMarkedForDiscount.next).toHaveBeenCalledWith(orderItemWithDiscount);
    });
  });
});
