import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe(`When calling getBillingEntries`, () => {
    it(`should return a list of invoices`, (done) => {
      service.getProducts().subscribe((products) => {
        expect(products.length).toBe(1);
        expect(products[0].children.length).toBe(2);
        done();
      });
    });
  });
});
