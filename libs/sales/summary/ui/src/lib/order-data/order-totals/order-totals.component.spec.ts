import { TranslateModule } from '@ngx-translate/core';
import { OrderTotalsComponent } from './order-totals.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('OrderTotalsComponent', () => {
  let component: OrderTotalsComponent;
  let fixture: ComponentFixture<OrderTotalsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
