import { OrderSubTotalsComponent } from './order-sub-totals.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('OrderSubTotalsComponent', () => {
  let component: OrderSubTotalsComponent;
  let fixture: ComponentFixture<OrderSubTotalsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderSubTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
