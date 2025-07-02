import { OmapiProduct, OmapiProductService } from '@telenet/ng-lib-omapi';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private readonly omapiProductService: OmapiProductService) {}

  getOmapiProducts(offerIds: string[]): Observable<OmapiProduct>[] {
    if (offerIds.length === 0) {
      return [of()];
    }
    return offerIds.map((id) => this.omapiProductService.getProductById('customer-registration', id));
  }
}
