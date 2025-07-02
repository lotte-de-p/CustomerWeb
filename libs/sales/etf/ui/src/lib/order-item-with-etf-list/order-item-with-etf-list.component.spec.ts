import { OrderItemWithEtfListComponent } from './order-item-with-etf-list.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { orderItemsWithDiscountStateFactory, usedSlotStateFactory } from '@sales/etf/data-access';

describe('OrderItemWithEtfListComponent', () => {
  let component: OrderItemWithEtfListComponent;
  let fixture: ComponentFixture<OrderItemWithEtfListComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderItemWithEtfListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('applyEtfCancellation', () => {
    beforeEach(() => {
      jest.spyOn(component.applyEtfCancellationEvent, 'next');
    });
    it('should call applyEtfCancellationEvent next with params given an orderItem and selected discount ', () => {
      const orderItemWithDiscount = orderItemsWithDiscountStateFactory.build();
      component.orderItemWithDiscount = orderItemWithDiscount;
      const selectedDiscountToTerminate = usedSlotStateFactory.build();
      component.selectedDiscountToTerminate = selectedDiscountToTerminate;

      component.applyEtfCancellation();

      expect(component.applyEtfCancellationEvent.next).toHaveBeenCalledWith({
        orderItemWithDiscount: orderItemWithDiscount,
        usedDiscountSlot: selectedDiscountToTerminate,
      });
    });

    it('should not call applyEtfCancellationEvent next given no orderItem', () => {
      component.orderItemWithDiscount = undefined;
      component.selectedDiscountToTerminate = usedSlotStateFactory.build();

      component.applyEtfCancellation();

      expect(component.applyEtfCancellationEvent.next).not.toHaveBeenCalled();
    });

    it('should not call applyEtfCancellationEvent next given no selected discount', () => {
      component.orderItemWithDiscount = orderItemsWithDiscountStateFactory.build();
      component.selectedDiscountToTerminate = undefined;

      component.applyEtfCancellation();

      expect(component.applyEtfCancellationEvent.next).not.toHaveBeenCalled();
    });
  });

  describe('cancelEtfSelection', () => {
    beforeEach(() => {
      jest.spyOn(component.cancelEtfSelectionEvent, 'next');
    });
    it('should cancel the etf selection given a orderItemWithDiscount', () => {
      const orderItemWithDiscount = orderItemsWithDiscountStateFactory.build();
      component.orderItemWithDiscount = orderItemWithDiscount;
      component.cancelEtfSelection();
      expect(component.cancelEtfSelectionEvent.next).toHaveBeenCalledWith(orderItemWithDiscount);
    });

    it('should not cancel the etf selection given no orderItemWithDiscount', () => {
      component.orderItemWithDiscount = undefined;
      component.cancelEtfSelection();
      expect(component.cancelEtfSelectionEvent.next).not.toHaveBeenCalled();
    });
  });

  describe('selectDiscountToTerminate', () => {
    it('should select discounts to terminate', () => {
      const usedSlot = usedSlotStateFactory.build();
      component.selectDiscountToTerminate(usedSlot);
      expect(component.selectedDiscountToTerminate).toEqual(usedSlot);
    });
  });
});
