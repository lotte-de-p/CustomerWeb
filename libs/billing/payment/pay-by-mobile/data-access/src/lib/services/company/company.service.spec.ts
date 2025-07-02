import { TestBed } from '@angular/core/testing';

import { CompanyService } from './company.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { of } from 'rxjs';
import { Company } from '../../entities/company.model';
import { Builder } from '@telenet/ng-lib-shared';

describe('CompanyService', () => {
  let service: CompanyService;
  let ocapiService: OcapiService;
  const company = Builder<Company>()
    .companyName('companyName_')
    .address('address_')
    .email('email_')
    .url('url_')
    .build();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcapiService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
  });

  beforeEach(() => {
    ocapiService = TestBed.inject(OcapiService);
    service = TestBed.inject(CompanyService);
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(company));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get company by id', () => {
    const ocapiCallConfig = new OcapiCallConfig(
      'pay-by-mobile',
      '/public/api/pay-by-mobile-service/v1/pay-by-mobile/supportinfo/companies/123?serviceName=someServiceName'
    );

    const actual$ = service.getCompany(123, 'someServiceName');
    expect(ocapiService.doGet).toHaveBeenCalledWith(ocapiCallConfig);
    actual$.subscribe((response) => expect(response).toBe(company));
  });
});
