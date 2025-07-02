import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedProductComponent } from './restricted-product.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

describe('RestrictedProductComponent', () => {
  let component: RestrictedProductComponent;
  let fixture: ComponentFixture<RestrictedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestrictedProductComponent, CommonModule, TranslateModule.forRoot()],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(RestrictedProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
