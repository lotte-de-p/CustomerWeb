import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNotificationsComponent } from './product-notifications.component';

describe('ProductNotificationsComponent', () => {
  let component: ProductNotificationsComponent;
  let fixture: ComponentFixture<ProductNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductNotificationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
