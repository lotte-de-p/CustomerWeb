import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { CustomerMsaService } from './customer-msa.service';
import { ProductMsaMapper } from '../mappers/product-msa.mapper';
import { expect } from '@jest/globals';

describe('CustomerMsaService', () => {
  let service: CustomerMsaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcapiService, ProductMsaMapper, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CustomerMsaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
