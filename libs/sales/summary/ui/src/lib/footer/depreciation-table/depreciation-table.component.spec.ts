import { TranslateModule } from '@ngx-translate/core';
import { DepreciationTableComponent } from './depreciation-table.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('DepreciationTableComponent', () => {
  let component: DepreciationTableComponent;
  let fixture: ComponentFixture<DepreciationTableComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(DepreciationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      component.depreciationItem = undefined;
    });

    it('should not create depreciationCostItems without a depreciationItem', () => {
      component.ngOnInit();
      expect(component.depreciationCostItems.length).toBe(0);
    });

    it('should  create depreciationCostItems with a depreciationItem', () => {
      component.depreciationItem = {
        name: 'someSmartPhone',
        price: 12000,
        duration: 12,
      };
      component.ngOnInit();
      const depreciationRemainingCostTimes = component.depreciationCostItems;
      expect(depreciationRemainingCostTimes.length).toBe(12);
      expect(depreciationRemainingCostTimes[0].remainingCost).toEqual(11000);
      expect(depreciationRemainingCostTimes[0].monthIndex).toEqual(0);
    });
  });
});
