import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ProductHolding } from '../models/product-holding.model';
import { ProductHoldingMapper } from '../mappers/product-holding.mapper';
import { Product } from '../models/product.model';
import { ProductConstants } from '../constants/product.constants';

export class BaseProductHoldingService {
  public PROPERTY_URL = '/public/?p=' + ProductConstants.CUSTOMER_PRODUCT_HOLDING;
  private productHoldingCache: ProductHolding;

  constructor(
    public ocapiService: OcapiService,
    public productHoldingMapper: ProductHoldingMapper
  ) {}

  public getCustomerProductHolding(messageGroup: string): Observable<ProductHolding> {
    if (this.productHoldingCache) {
      return of(this.productHoldingCache);
    }
    return this.ocapiService
      .doGet(new OcapiCallConfig(messageGroup, this.PROPERTY_URL, this.productHoldingMapper))
      .pipe(
        tap((response) => {
          if (response) {
            this.productHoldingCache = response;
          }
        })
      );
  }

  public getCustomerProductsByAddressId(messageGroup: string, addressId: string): Observable<Product[]> {
    return this.getCustomerProductHolding(messageGroup).pipe(
      map((response) =>
        response.products.filter((product: Product) => product.address && product.address.addressId === addressId)
      )
    );
  }
}
