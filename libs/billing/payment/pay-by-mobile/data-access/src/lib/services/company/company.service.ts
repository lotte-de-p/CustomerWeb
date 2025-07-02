import { Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable } from 'rxjs';
import { Company } from '../../entities/company.model';
import { PAY_BY_MOBILE_SERVICE } from '../pay-by-mobile-service.constants';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private static readonly PAY_BY_MOBILE_SERVICE_COMPANY = PAY_BY_MOBILE_SERVICE + 'supportinfo/companies/';
  private static readonly MESSAGE_GROUP = 'pay-by-mobile';

  constructor(private readonly ocapiService: OcapiService) {}

  getCompany(companyId: number, serviceName: string): Observable<Company> {
    const endpoint = CompanyService.PAY_BY_MOBILE_SERVICE_COMPANY + companyId + '?serviceName=' + serviceName;
    return this.ocapiService.doGet(new OcapiCallConfig<Company, Company>(CompanyService.MESSAGE_GROUP, endpoint));
  }
}
