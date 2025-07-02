import { Store } from '@ngrx/store';
import { inject, Injectable } from '@angular/core';
import { isIntentCalculated, salesOrder, validateOptionsCheckout } from './sales.selectors';
import { ValidateOptionsCheckoutResponseInterface } from '../../../../interfaces/validate-options-checkout.interface';
import { SalesStateModel } from './sales.state';
import { first } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class SalesFacade {
  readonly #store = inject(Store<SalesStateModel>);
  salesOrder$ = this.#store.select(salesOrder);
  isIntentCalculated$ = this.#store.select(isIntentCalculated);
  getCurrentValidateOptionsCheckout(): ValidateOptionsCheckoutResponseInterface {
    let validateOptionsCheckoutResponse: ValidateOptionsCheckoutResponseInterface = null;

    this.#store
      .select(validateOptionsCheckout)
      .pipe(first())
      .subscribe((currentState) => {
        validateOptionsCheckoutResponse = currentState;
      });

    return validateOptionsCheckoutResponse;
  }
}
