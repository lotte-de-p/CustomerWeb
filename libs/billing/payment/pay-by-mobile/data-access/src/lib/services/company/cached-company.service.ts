import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Company } from '../../entities/company.model';
import { CompanyService } from './company.service';

@Injectable({
  providedIn: 'root',
})
export class CachedCompanyService {
  private cache: Record<number, Company> = {};

  constructor(private readonly companyService: CompanyService) {}

  getCompany(companyId: number, serviceName: string): Observable<Company> {
    const cachedCompany = this.cache[companyId];
    if (cachedCompany) {
      return of(cachedCompany);
    } else {
      return this.companyService.getCompany(companyId, serviceName).pipe(
        tap((company) => {
          this.cache[companyId] = company;
        })
      );
    }
  }
}
