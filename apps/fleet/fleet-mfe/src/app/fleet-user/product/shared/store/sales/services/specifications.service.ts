import { Injectable } from '@angular/core';
import { OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { forkJoin, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import specifationDetails from '../fixtures/specifications-details.json';
import { SalesOrder } from '../../../../../shared/models/sales-order.model';
@Injectable({
  providedIn: 'root',
})
export class SpecificationsService {
  private readonly SPECURL = 'specurl';
  private readonly hardcodedProducts = specifationDetails;

  constructor(
    private readonly omapiProductMapper: OmapiProductMapper,
    private readonly http: HttpClient
  ) {}

  public addSpecifications(data: SalesOrder, mapOmapiObject: boolean) {
    const promises = this.getSpecPromises(data, mapOmapiObject);

    return forkJoin(promises).pipe(
      map((value) => {
        return {
          success: true,
          data: value,
        };
      }),
      catchError((response) => {
        return of({
          success: false,
          data: data,
          labelKey: 'omapi.response-' + response.status,
        });
      })
    );
  }

  private getSpecPromises(data: SalesOrder, mapOmapiObject: boolean) {
    let promises = [];
    if (data === null || data === undefined || typeof data !== 'object') {
      return promises;
    }

    if (Object.prototype.hasOwnProperty.call(data, this.SPECURL)) {
      const hardcodedProduct = this.getHardcodedProduct(data.id);
      if (hardcodedProduct) {
        this.pushHardcodedPromiseOfOmapiProduct(data, hardcodedProduct, mapOmapiObject, promises);
      } else {
        this.pushPromiseFromOmapiProduct(data, mapOmapiObject, promises);
      }
    }

    for (const key in data) {
      if (typeof data[key] === 'object') {
        promises = promises.concat(this.getSpecPromises(data[key], mapOmapiObject));
      }
    }
    return promises;
  }

  private getHardcodedProduct(omapiId) {
    return this.hardcodedProducts.find((products) => {
      return products.product.productid === omapiId;
    });
  }

  private pushHardcodedPromiseOfOmapiProduct(sofyProduct, hardcodedProduct, mapOmapiObject, promises): void {
    promises.push(
      new Promise(hardcodedProduct).then(function (product) {
        sofyProduct['spec'] = product;
        if (mapOmapiObject === true) {
          sofyProduct['productInfo'] = this.omapiProductMapper.toModel(product);
        }
      })
    );
  }

  private pushPromiseFromOmapiProduct(data, mapOmapiObject, promises): void {
    const promise$ = this.http.get(data[this.SPECURL], this.getHttpConfig()).pipe(
      take(1),
      map((response) => {
        data['spec'] = response['data'];
        if (mapOmapiObject === true) {
          data['productInfo'] = this.omapiProductMapper.toModel(response['data']);
        }
      })
    );

    promises.push(promise$);
  }

  private getHttpConfig() {
    return {
      headers: {
        'x-alt-referer': window.location.href,
        'X-Requested-With': 'XMLHttpRequest',
      },
      timeout: 10000,
      cache: true,
    };
  }
}
