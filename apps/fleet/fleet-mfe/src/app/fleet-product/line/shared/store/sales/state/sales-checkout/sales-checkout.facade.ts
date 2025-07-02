import { Store } from '@ngrx/store';
import { inject, Injectable } from '@angular/core';
import { moveInfo, requiresInstallation, streamingServiceOffer } from './sales-checkout.selectors';
import { MoveInfoInterface, SalesCheckout } from './sales-checkout.state';
import { first } from 'rxjs';
import { Offer } from '../../../../interfaces/offer.interface';
@Injectable({ providedIn: 'root' })
export class SalesCheckoutFacade {
  readonly #store = inject(Store<SalesCheckout>);

  getCurrentMoveInfo(): MoveInfoInterface {
    let moveInfoResponse: MoveInfoInterface = null;

    this.#store
      .select(moveInfo)
      .pipe(first())
      .subscribe((currentState) => {
        moveInfoResponse = currentState;
      });

    return moveInfoResponse;
  }

  gerCurrentRequiresInstallation(): boolean {
    let requiresInstallationResponse: boolean = null;

    this.#store
      .select(requiresInstallation)
      .pipe(first())
      .subscribe((currentState) => {
        requiresInstallationResponse = currentState;
      });

    return requiresInstallationResponse;
  }

  getCurrentStreamingServiceOffer(): Offer {
    let streamingServiceOfferResponse: Offer = null;

    this.#store
      .select(streamingServiceOffer)
      .pipe(first())
      .subscribe((currentState) => {
        streamingServiceOfferResponse = currentState;
      });

    return streamingServiceOfferResponse;
  }
}
