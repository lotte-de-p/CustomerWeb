import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOptionsSpecificationsComponent } from './product-options-specifications.component';

describe('ProductOptionsSpecificationsComponent', () => {
  let component: ProductOptionsSpecificationsComponent;
  let fixture: ComponentFixture<ProductOptionsSpecificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductOptionsSpecificationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductOptionsSpecificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getFormattedSpecifications', () => {
    const returnValue = component.getFormattedSpecifications('-line1\n-line2\n-line3');
    expect(returnValue).toEqual('line1<li>line2<li>line3');
  });

  it('should return empty string', () => {
    const returnValue = component.getFormattedSpecifications();
    expect(returnValue).toEqual('');
  });
});
