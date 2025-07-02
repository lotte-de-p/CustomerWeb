import { Injectable } from '@angular/core';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { forkJoin, Observable, of } from 'rxjs';
import { cloneDeep, isEmpty } from 'lodash-es';
import { OmapiProductService } from './omapi-product.service';
import { OmapiProductMapper } from '../mappers';
import { OmapiUtils } from '../utils';
import { OmapiProduct } from '../models';

@Injectable({
  providedIn: 'root',
})
export class OmapiEnrichService {
  constructor(
    public readonly omapiProductService: OmapiProductService,
    private readonly omapiProductMapper: OmapiProductMapper
  ) {}

  public enrichResponseWithOmapiData<T>(messageGroup: string, response: T): Observable<T> {
    const copy = cloneDeep(response);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return forkJoin(this.getOmapiObservables(messageGroup, copy)).pipe(map(() => copy));
  }

  private getOmapiObservables<T extends RawOmapiProduct>(
    messageGroup: string,
    data: T,
    specUrls: Observable<unknown>[] = []
  ): Observable<unknown>[] {
    if (data === undefined || data === null) {
      return specUrls;
    }

    Object.entries(data).forEach(([key, value]) => {
      if (key === 'specurl') {
        const sofyComboProduct = OmapiUtils.getComboProducts(data.omapiid);
        if (isEmpty(sofyComboProduct)) {
          const omapiProduct$ = this.omapiProductService
            // eslint-disable-next-line @typescript-eslint/ban-types
            .getProductByEndpoint(messageGroup, (value as object).toString())
            .pipe(
              tap((omapiProduct) => {
                data['productInfo'] = omapiProduct;
              }),
              catchError(() => {
                return of(undefined);
              }),
              switchMap((omapiProduct) => this.enrichConstituents(messageGroup, omapiProduct))
            );
          specUrls.push(omapiProduct$);
        } else {
          data['productInfo'] = this.omapiProductMapper.toModel({ product: sofyComboProduct });
        }
      }

      if (typeof value === 'object') {
        this.getOmapiObservables(messageGroup, value, specUrls);
      }
    });
    if (isEmpty(specUrls)) {
      return [of(data)];
    }
    return specUrls;
  }

  private enrichConstituents(messageGroup: string, product?: OmapiProduct): Observable<OmapiProduct[]> {
    if (product === undefined || product.getConstituents().length === 0) {
      return of([]);
    }

    return forkJoin(
      product.getConstituents().map((constituentInterface) => {
        return this.omapiProductService.getProductByEndpoint(messageGroup, constituentInterface.specurl).pipe(
          tap((omapiProduct) => {
            constituentInterface.productInfo = omapiProduct;
          })
        );
      })
    );
  }
}

interface RawOmapiProduct {
  omapiid: string;
  productInfo: unknown;
}
