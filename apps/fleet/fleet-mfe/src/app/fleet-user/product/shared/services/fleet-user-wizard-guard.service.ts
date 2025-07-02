import { CustomerAccountService } from '../../../shared/services/customer/customer-account.service';
import { ErrorMessage, MessageService } from '@telenet/ng-lib-message';
import { LoaderService } from '@telenet/ng-lib-page';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { inject, Injectable } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { EMPTY, Observable } from 'rxjs';
import { FleetUserMessageService } from '../../../shared/services/message/fleet-user-message.service';
import { ProductOverviewConstants } from '../../../../shared/common/constants/product-overview.constant';
import { FleetUserProductService } from '../../../shared/services/product/fleet-user-product.service';

@Injectable({
  providedIn: 'root',
})
export class FleetUserWizardGuardService {
  readonly #customerAccountService: CustomerAccountService = inject(CustomerAccountService);
  readonly #fleetUserProductService: FleetUserProductService = inject(FleetUserProductService);
  readonly #messageService: MessageService = inject(MessageService);
  readonly #fleetMessageService: FleetUserMessageService = inject(FleetUserMessageService);
  readonly #loaderService: LoaderService = inject(LoaderService);
  readonly DEFAULT_ERROR_MESSAGE: string = 'ocapi.400';

  isFleetUserOrderingEnabled$(messageGroup: string): Observable<boolean> {
    return this.#customerAccountService.isFleetUserOrderingEnabled(messageGroup).pipe(
      map((fleetUserOrderingEnabled) => {
        if (!fleetUserOrderingEnabled) {
          this.#messageService.addMessage(new ErrorMessage(messageGroup, this.DEFAULT_ERROR_MESSAGE));
        }
        return fleetUserOrderingEnabled;
      }),
      catchError((error) => {
        this.#fleetMessageService.showError(error, messageGroup);
        return EMPTY;
      })
    );
  }

  product$(messagegroup: string, msisdn: string): Observable<Product | null> {
    return this.getProduct(messagegroup, msisdn).pipe(
      map((product) => {
        if (product && product.isSplitBill20()) {
          return product;
        } else {
          this.#messageService.addMessage(new ErrorMessage(messagegroup, this.DEFAULT_ERROR_MESSAGE));
          return null;
        }
      })
    );
  }

  private getProduct(messageGroup: string, msisdn: string): Observable<Product> {
    return this.#fleetUserProductService
      .getUserProductByIdentifier(ProductOverviewConstants.MESSAGE_GROUP, msisdn)
      .pipe(
        tap(() => this.#loaderService.start()),
        catchError((error) => {
          this.#fleetMessageService.showError(error, messageGroup);
          return EMPTY;
        }),
        finalize(() => this.#loaderService.stop())
      );
  }
}
