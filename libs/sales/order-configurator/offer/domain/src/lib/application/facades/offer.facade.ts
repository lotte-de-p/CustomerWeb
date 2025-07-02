import { OfferService } from '../../services/offer.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OfferFacade {
  constructor(private readonly offerService: OfferService) {}

  getOfferFromEncodedUrlParameter() {
    return this.offerService.getOfferFromEncodedUrlParameter('sdata');
  }
}
