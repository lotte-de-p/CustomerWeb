import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country, CountryResponse } from '../entities/country-list.interface';
import { LanguageService, PathCategorisationService } from '@telenet/ng-lib-page';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryListService {
  countries: Country[] = [];

  constructor(
    private readonly http: HttpClient,
    private readonly languageService: LanguageService,
    private readonly pathCategorisationService: PathCategorisationService,
    private readonly configService: ConfigService
  ) {}

  load(searchKey: string, customerType: string): Observable<Country[]> {
    const baseUrl = this.configService.getConfig(ConfigConstants.OMAPI_QUERY_URL) + `/rir/v1`;
    const url = [baseUrl, 'country'].join('/');

    const language = this.languageService.getLanguage();
    const params = new HttpParams()
      .set('key', searchKey)
      .set('language', language)
      .set('brand', this.pathCategorisationService.getCustomerBrand())
      .set('category', customerType);

    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<CountryResponse>(url, { params, headers }).pipe(
      map((response: CountryResponse) => {
        const result = response.countries;
        return result?.sort((a, b) => a.country?.localeCompare(b.country));
      })
    );
  }
}
