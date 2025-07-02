import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CompanyService } from './company.service';
import { CachedCompanyService } from './cached-company.service';
import { Company } from '../../entities/company.model';

describe('CachedCompanyService', () => {
  let service: CachedCompanyService;
  let companyService: CompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CachedCompanyService,
        {
          provide: CompanyService,
          useValue: {
            getCompany: jest.fn(),
          },
        },
      ],
    });
    service = TestBed.inject(CachedCompanyService);
    companyService = TestBed.inject(CompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCompanyById', () => {
    it('should return cached company if available', () => {
      const companyId = 1;
      const cachedCompany: Company = { companyName: 'Test Company' } as Company;
      service['cache'][companyId] = cachedCompany;

      service.getCompany(companyId, 'someServiceName').subscribe((result) => {
        expect(result).toEqual(cachedCompany);
      });

      expect(companyService.getCompany).not.toHaveBeenCalled();
    });

    it('should call companyService.getCompany and cache the result if company is not cached', () => {
      const companyId = 1;
      const company: Company = { companyName: 'Test Company' } as Company;
      const getCompanySpy = jest.spyOn(companyService, 'getCompany').mockReturnValue(of(company));

      service.getCompany(companyId, 'someServiceName').subscribe((result) => {
        expect(result).toEqual(company);
        expect(service['cache'][companyId]).toEqual(company);
      });

      expect(getCompanySpy).toHaveBeenCalledWith(companyId, 'someServiceName');
    });
  });
});
