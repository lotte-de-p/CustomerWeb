import { EtfListComponent } from './etf-list.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { usedSlotStateFactory } from '@sales/etf/data-access';

describe('EtfListComponent', () => {
  let component: EtfListComponent;
  let fixture: ComponentFixture<EtfListComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(EtfListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('selectDiscountToTerminate', () => {
    it('should select the discount to terminate', () => {
      jest.spyOn(component.discountTerminationSelected, 'next');
      const usedDiscount = usedSlotStateFactory.build();
      component.selectDiscountToTerminate(usedDiscount);
      expect(component.discountTerminationSelected.next).toHaveBeenCalledWith(usedDiscount);
    });
  });

  describe('usedDiscountSlotList', () => {
    it('should filter out discountSlots with no end date', () => {
      const usedDiscountSlot = usedSlotStateFactory.build({ endDateOfContract: undefined });
      component.usedDiscountSlotList = [usedDiscountSlot];
      expect(component.usedDiscountSlotList).toEqual([]);
    });
    it('should filter out discountSlots with no end date and leave other discountSlots', () => {
      const usedDiscountSlotNoEndDate = usedSlotStateFactory.build({ endDateOfContract: undefined });
      const usedDiscountSlotWithEndDate = usedSlotStateFactory.build();
      component.usedDiscountSlotList = [usedDiscountSlotNoEndDate, usedDiscountSlotWithEndDate];
      expect(component.usedDiscountSlotList).toEqual([usedDiscountSlotWithEndDate]);
    });
  });
});
