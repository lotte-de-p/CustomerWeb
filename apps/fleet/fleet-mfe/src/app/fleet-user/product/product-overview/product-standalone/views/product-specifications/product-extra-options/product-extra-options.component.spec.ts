import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductExtraOptionsComponent } from './product-extra-options.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { Option, Product } from '../../../../../../shared/models/product.model';

describe('ProductExtraOptionsComponent', () => {
  let component: ProductExtraOptionsComponent;
  let fixture: ComponentFixture<ProductExtraOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductExtraOptionsComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductExtraOptionsComponent);
    component = fixture.componentInstance;

    component.product = {
      options: [] as Option[],
    } as Product;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter second first', () => {
    component.product = new Product();
    const productInfo = new OmapiProduct();
    productInfo.weight = 5;
    const productInfo2 = new OmapiProduct();
    productInfo2.weight = 1;
    component.product.options = [
      { productInfo: productInfo, label: 'option 1' } as Option,
      { productInfo: productInfo2, label: 'option 2' } as Option,
    ];

    component.ngOnInit();

    expect(component.options).toEqual([
      { productInfo: productInfo2, label: 'option 2' } as Option,
      { productInfo: productInfo, label: 'option 1' } as Option,
    ]);
  });

  it('should filter first first', () => {
    component.product = new Product();
    const productInfo = new OmapiProduct();
    productInfo.weight = 5;
    const productInfo2 = new OmapiProduct();
    productInfo2.weight = 9;
    component.product.options = [
      { productInfo: productInfo, label: 'option 1' } as Option,
      { productInfo: productInfo2, label: 'option 2' } as Option,
    ];

    component.ngOnInit();

    expect(component.options).toEqual([
      { productInfo: productInfo, label: 'option 1' } as Option,
      { productInfo: productInfo2, label: 'option 2' } as Option,
    ]);
  });
  it('should filter if no weight present second', () => {
    component.product = new Product();
    const productInfo = new OmapiProduct();
    productInfo.weight = 5;
    const productInfo2 = new OmapiProduct();
    component.product.options = [
      { productInfo: productInfo, label: 'option 1' } as Option,
      { productInfo: productInfo2, label: 'option 2' } as Option,
    ];

    component.ngOnInit();

    expect(component.options).toEqual([
      { productInfo: productInfo2, label: 'option 2' } as Option,
      { productInfo: productInfo, label: 'option 1' } as Option,
    ]);
  });

  it('should filter if no weight present both', () => {
    component.product = new Product();
    const productInfo = new OmapiProduct();
    const productInfo2 = new OmapiProduct();
    component.product.options = [
      { productInfo: productInfo, label: 'option 1' } as Option,
      { productInfo: productInfo2, label: 'option 2' } as Option,
    ];

    component.ngOnInit();

    expect(component.options).toEqual([
      { productInfo: productInfo, label: 'option 1' } as Option,
      { productInfo: productInfo2, label: 'option 2' } as Option,
    ]);
  });
});
