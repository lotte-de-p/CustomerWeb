import { EtfComponent } from './etf.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { TgFormsModule } from '@telenet/ng-lib-form';
import { provideMockStore } from '@ngrx/store/testing';
import { EventFacade } from '@sales/events/data-access';
import { etfStepLoaded } from './events/etf-step-loaded.const';
import { orderItemsWithDiscountStateFactory, usedSlotStateFactory, EtfFacade } from '@sales/etf/data-access';

describe('EtfComponent', () => {
  let component: EtfComponent;
  let fixture: ComponentFixture<EtfComponent>;
  let eventFacade: EventFacade;
  let etfFacade: EtfFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore()],
      imports: [TranslateModule.forRoot(), TgFormsModule],
    }).compileComponents();

    eventFacade = TestBed.inject(EventFacade);
    etfFacade = TestBed.inject(EtfFacade);
    fixture = TestBed.createComponent(EtfComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should trigger the etf step loaded event', () => {
      jest.spyOn(eventFacade, 'triggerEvent');
      component.ngOnInit();
      expect(eventFacade.triggerEvent).toHaveBeenCalledWith(etfStepLoaded);
    });
  });

  describe('onNextStep', () => {
    it('should throw an error when no orderitemswithdiscount or usedslots are available', () => {
      component.onNextStep().subscribe(
        () => {
          fail();
        },
        (err) => {
          expect(err).toEqual('');
        }
      );
    });

    it('should trigger the etf step finished event', () => {
      jest.spyOn(eventFacade, 'triggerEvent');
      component.onNextStep();
      expect(eventFacade.triggerEvent).not.toHaveBeenCalled();
    });
  });

  describe('setShowEtfOptions', () => {
    it('should show the etf options', () => {
      jest.spyOn(etfFacade, 'setShowEtfOptions');
      jest.spyOn(eventFacade, 'triggerAnalyticsClickEvent');
      const orderItemWithDiscount = orderItemsWithDiscountStateFactory.build();
      component.setShowEtfOptions(orderItemWithDiscount, true);
      expect(etfFacade.setShowEtfOptions).toHaveBeenCalledWith(orderItemWithDiscount, true);
      expect(eventFacade.triggerAnalyticsClickEvent).toHaveBeenCalledWith({ name: 'enable discount link clicked' });
    });
  });

  describe('setOrderItemTerminationStateEvent', () => {
    beforeEach(() => {
      jest.spyOn(etfFacade, 'setShowEtfOptions');
      jest.spyOn(etfFacade, 'setOrderItemToMarkedForBuyingWithoutDiscount');
      jest.spyOn(eventFacade, 'triggerAnalyticsClickEvent');
    });
    it('should call setShowEtfOptions when buyWithDiscount is true', () => {
      const orderItemWithDiscount = orderItemsWithDiscountStateFactory.build();
      const event = { orderItemWithDiscount: orderItemWithDiscount, buyWithDiscount: true };
      component.setOrderItemTerminationStateEvent(event);
      expect(etfFacade.setShowEtfOptions).toHaveBeenCalledWith(orderItemWithDiscount, true);
    });

    it('should call mark an orderitem for no discount when buyWithDiscount is false', () => {
      const orderItemWithDiscount = orderItemsWithDiscountStateFactory.build();
      const event = { orderItemWithDiscount: orderItemWithDiscount, buyWithDiscount: false };
      component.setOrderItemTerminationStateEvent(event);

      expect(etfFacade.setShowEtfOptions).toHaveBeenCalledWith(orderItemWithDiscount, false);
      expect(etfFacade.setOrderItemToMarkedForBuyingWithoutDiscount).toHaveBeenCalledWith(orderItemWithDiscount);
    });

    it('should fire analytics event with id of order item discount', () => {
      const orderItemWithDiscount = orderItemsWithDiscountStateFactory.build();
      const event = { orderItemWithDiscount: orderItemWithDiscount, buyWithDiscount: false };

      component.setOrderItemTerminationStateEvent(event);
      expect(eventFacade.triggerAnalyticsClickEvent).toHaveBeenCalledWith({
        name: 'terminate existing contract selected',
        attributes: {
          itemName: `discount-slot-${event.orderItemWithDiscount.id}`,
          itemData: event.buyWithDiscount ? 'yes' : 'no',
        },
      });
    });
  });

  describe('cancelEtfTermination', () => {
    it('cancel the discount termination and fire analytics even and fire analyticst', () => {
      jest.spyOn(etfFacade, 'setShowEtfOptions');
      jest.spyOn(etfFacade, 'cancelEtfTermination');
      jest.spyOn(eventFacade, 'triggerAnalyticsClickEvent');
      const orderItemWithDiscount = orderItemsWithDiscountStateFactory.build();
      component.cancelEtfTermination(orderItemWithDiscount);
      expect(etfFacade.setShowEtfOptions).toHaveBeenCalledWith(orderItemWithDiscount, false);
      expect(etfFacade.cancelEtfTermination).toHaveBeenCalledWith(orderItemWithDiscount);
      expect(eventFacade.triggerAnalyticsClickEvent).toHaveBeenCalledWith({
        name: 'cancel button clicked',
        attributes: {
          itemName: `discount-slot-${orderItemWithDiscount.id}`,
        },
      });
    });
  });

  describe('selectDiscountToTerminate', () => {
    it('select the discount to terminate and fire analytics', () => {
      jest.spyOn(etfFacade, 'setShowEtfOptions');
      jest.spyOn(etfFacade, 'setDiscountToTerminate');
      jest.spyOn(eventFacade, 'triggerAnalyticsClickEvent');
      const orderItemWithDiscount = orderItemsWithDiscountStateFactory.build();
      const usedDiscountSlot = usedSlotStateFactory.build();
      const event = { orderItemWithDiscount: orderItemWithDiscount, usedDiscountSlot: usedDiscountSlot };
      component.selectDiscountToTerminate(event);
      expect(etfFacade.setShowEtfOptions).toHaveBeenCalledWith(orderItemWithDiscount, false);
      expect(etfFacade.setDiscountToTerminate).toHaveBeenCalledWith(orderItemWithDiscount, usedDiscountSlot);
      expect(eventFacade.triggerAnalyticsClickEvent).toHaveBeenCalledWith({
        name: 'apply button clicked',
        attributes: {
          itemName: `discount-slot-${orderItemWithDiscount.id}`,
        },
      });
    });
  });

  describe('setOrderItemMarkedForDiscount', () => {
    it('reset the discount on an orderItem', () => {
      jest.spyOn(etfFacade, 'resetOrderItem');
      const orderItemWithDiscount = orderItemsWithDiscountStateFactory.build();
      component.setOrderItemMarkedForDiscount(orderItemWithDiscount);
      expect(etfFacade.resetOrderItem).toHaveBeenCalledWith(orderItemWithDiscount);
    });
  });
});
