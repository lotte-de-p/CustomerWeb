import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverviewGroupComponent } from './overview-group.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

describe('OverviewGroupComponent', () => {
  let component: OverviewGroupComponent;
  let fixture: ComponentFixture<OverviewGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getLabelKey', function () {
    const overviewItem = { amount: 1, weight: 1, name: 'test', key: 'test-key' };

    it('should return single label when amount is 1', function () {
      expect(component.getLabelKey(overviewItem)).toEqual('item');
    });

    it('should return multi label when amount is greater than 1', function () {
      overviewItem.amount = 2;
      expect(component.getLabelKey(overviewItem)).toEqual('item-with-amount');
    });
  });

  describe('getLabelArgs', function () {
    const overviewItem = { amount: 1, weight: 1, key: 'test-key' };

    it('should return name and amount in the args', function () {
      expect(component.getLabelArgs(overviewItem)).toEqual({ itemName: overviewItem.key, amount: overviewItem.amount });
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
