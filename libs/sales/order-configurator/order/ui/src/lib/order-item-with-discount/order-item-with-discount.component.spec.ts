import { OrderItemWithDiscountComponent } from './order-item-with-discount.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('OrderItemWithDiscountComponent', () => {
  let component: OrderItemWithDiscountComponent;
  let fixture: ComponentFixture<OrderItemWithDiscountComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderItemWithDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
