import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIncludedOptionsComponent } from './product-included-options.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Product } from '../models/product.model';

describe('ProductIncludedOptionsComponent', () => {
  let component: ProductIncludedOptionsComponent;
  let fixture: ComponentFixture<ProductIncludedOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductIncludedOptionsComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductIncludedOptionsComponent);
    component = fixture.componentInstance;

    component.product = {} as Product;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
